import { Request, Response } from 'express';

import userService from '@services/user-service';
import { errorMessage, succeedMessage } from '@utils/server-message';

class UserController {
  signup = (req: Request, res: Response) => {
    try {
      const insert = userService.createUser(req.body);

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
  };
}

export default new UserController();
