const { encryptPassword } = require('@utils/bcrypt');
const userModel = require('@models/user-model');

class UserService {
  async createUser(payload) {
    payload.password = encryptPassword(payload.password);

    const insertUser = await userModel.insert(payload);

    return insertUser;
  }
}

const userService = new UserService();

module.exports = userService;
