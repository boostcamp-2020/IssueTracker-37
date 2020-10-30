import express, { Request, Response } from 'express';
import userRouter from './user/user-routes';

const router = express.Router();

router.use('/user', userRouter);

router.get('/', (req: Request, res: Response) => {
  return res.json({ result: 'true' });
});

export default router;
