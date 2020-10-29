import express, { Request, Response } from 'express';

import user from './user/user-routes';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({ result: 'true' });
});

router.use('/user', user);

export default router;
