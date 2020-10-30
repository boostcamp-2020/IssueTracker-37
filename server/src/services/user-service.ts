const bcrypt = require('bcrypt');

const { models } = require('../sequelize').default;

const saltRounds: number = 10;

interface signupForm {
  email: string;
  password: string;
  name: string;
}

const getHash = (password: string) => {
  return new Promise((resolve: any, reject: any) => {
    bcrypt.genSalt(saltRounds, (err: any, salt: any) => {
      if (err) reject(err);
      bcrypt.hash(password, salt, (Err: any, hash: string) => {
        if (Err) reject(Err);
        resolve(hash);
      });
    });
  });
};

class UserService {
  createUser = async (payload: signupForm) => {
    try {
      payload.password = String(await getHash(payload.password));

      const insertUser = await models.user.create(payload);

      return insertUser;
    } catch (err) {
      throw err;
    }
  };
}

export default new UserService();
