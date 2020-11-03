const { models } = require('@sequelize/index');

class UserRepository {
  async insert(userDTO) {
    const insertUser = await models.user.create(userDTO);

    return insertUser;
  }
}

const userRepository = new UserRepository();

module.exports = userRepository;
