import userRepo from '@repositories/user-repository';
import { encryptPassword } from '@utils/bcrypt';

interface signupForm {
  email: string;
  password: string;
  name: string;
}

class UserService {
  createUser = async (payload: signupForm) => {
    try {
      payload.password = encryptPassword(payload.password);

      const insertUser = await userRepo.insert(payload);

      return insertUser;
    } catch (err) {
      throw err;
    }
  };
}

export default new UserService();
