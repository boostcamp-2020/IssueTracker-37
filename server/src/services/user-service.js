const { encryptPassword } = require('@utils/bcrypt');
const userModel = require('@models/user-model');

class UserService {
  async createUser(payload) {
    payload.password = encryptPassword(payload.password);

    const insertUser = await userModel.insert(payload);

    return insertUser;
  }

  async getUsers() {
    try {
      const users = await userModel.getUsers();

      return users;
    } catch (err) {
      throw new Error();
    }
  }
}

const userService = new UserService();

module.exports = userService;
