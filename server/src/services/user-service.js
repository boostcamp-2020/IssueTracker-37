const userRepo = require('../repositories/user-repository');
const encryptPassword = require('../utils/bcrypt');

class UserService {
  async createUser(payload) {
    try {
      payload.password = encryptPassword(payload.password);

      const insertUser = await userRepo.insert(payload);

      return insertUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new UserService();
