import express from 'express';

import userController from './user-controller';

const router: express.Router = express.Router();

router.post('/signup', userController.signup);

export default router;
