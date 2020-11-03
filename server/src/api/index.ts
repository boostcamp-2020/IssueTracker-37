import express from 'express';
import userRouter from '@api/user/user-routes';

const router = express.Router();

router.use('/user', userRouter);

export default router;
