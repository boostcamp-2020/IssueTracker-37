const userService = require('@services/user-service');
const { errorMessage, succeedMessage } = require('@utils/server-message');

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
}

const userController = new UserController();

module.exports = userController;
