const jwt = require('jsonwebtoken');

const {
  getGitHubAccessToken,
  getGitHubProfile,
  getGitHubEmail,
  findOrCreateGitHubUser,
} = require('@oauth/github');
const userService = require('@services/user-service');

const { errorMessage, succeedMessage } = require('@utils/server-message');

const { JWT_SECRET_KEY } = process.env;

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedSelect,
        data: users,
      });
    } catch (err) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedSelect });
    }
  }

  async signup(req, res) {
    try {
      const insert = await userService.createUser(req.body);

      res.status(200).send({
        state: 'success',
        message: succeedMessage.registerdUser,
        data: insert,
      });
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedRegister });
    }
  }

  gitHubOAuthRedirect(req, res) {
    const GitHubOAuthUrl = 'https://github.com/login/oauth/authorize';
    const clientId = process.env.GITHUB_CLIENT_ID;

    const url = `${GitHubOAuthUrl}?client_id=${clientId}&scope=user`;

    try {
      res.redirect(url);
    } catch (error) {
      res
        .status(400)
        .send({ state: 'fail', message: errorMessage.failedIssueToken });
    }
  }

  async gitHubCallback(req, res) {
    try {
      const { code } = req.query;

      const accessToken = await getGitHubAccessToken(code);
      const name = await getGitHubProfile(accessToken);
      const email = await getGitHubEmail(accessToken);
      const user = await findOrCreateGitHubUser(name, email);

      const payload = { no: user.id, email: user.email };
      const generateJWTToken = jwt.sign(payload, JWT_SECRET_KEY);

      return res.status(200).send({
        state: 'success',
        message: succeedMessage.succedLogin,
        token: generateJWTToken,
      });
    } catch (error) {
      res
        .status(500)
        .send({ state: 'fail', message: errorMessage.failedIssueToken });
    }
  }
}

const userController = new UserController();

module.exports = userController;
