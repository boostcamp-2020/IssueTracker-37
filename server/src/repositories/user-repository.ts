const { models } = require('../sequelize').default;

class UserRepository {
  insert = async (userDTO: any) => {
    const insertUser = await models.user.create(userDTO);

    return insertUser;
  };
}

export default new UserRepository();
