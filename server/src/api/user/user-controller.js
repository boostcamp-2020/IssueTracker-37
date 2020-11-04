const userService = require('@services/user-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

const CLIENT_OAUTH_CALLBACK_URL = 'http://localhost:8080/github_callback';

class UserController {
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
      // TODO: 토큰 생성 함수 구현
      res
        .cookie('token', 'temp token string')
        .redirect(CLIENT_OAUTH_CALLBACK_URL);
    } catch (error) {
      res
        .status(500)
        .send({ state: 'fail', message: errorMessage.failedIssueToken });
    }
  }
}

const userController = new UserController();

module.exports = userController;
