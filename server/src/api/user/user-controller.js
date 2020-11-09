const jwt = require('jsonwebtoken');
const userService = require('@services/user-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

const CLIENT_OAUTH_CALLBACK_URL = 'http://localhost:8080/github_callback';

const { JWT_SECRET_KEY } = process.env;

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();

      res.status(200).send({
        status: 'success',
        message: succeedMessage.succeedSelect,
        data: { Users: users },
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

  gitHubCallback(req, res) {
    try {
      const { user } = req;

      const payload = { no: user.id, email: user.email };
      const generateJWTToken = jwt.sign(payload, JWT_SECRET_KEY);

      res.cookie('token', generateJWTToken).redirect(CLIENT_OAUTH_CALLBACK_URL);
    } catch (error) {
      res
        .status(500)
        .send({ state: 'fail', message: errorMessage.failedIssueToken });
    }
  }
}

const userController = new UserController();

module.exports = userController;
