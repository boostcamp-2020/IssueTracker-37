import { Request, Response } from 'express';
import userService from '../../services/user-service';

class UserController {
  signup = (req: Request, res: Response) => {
    const payload = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    };

    try {
      const insert = userService.createUser(payload);

      res
        .status(200)
        .send({ state: 'success', message: '성공메시지', data: insert });
    } catch (error) {
      res.status(400).send({ state: 'fail', message: '에러메시지' });
    }
  };
}

export default new UserController();
