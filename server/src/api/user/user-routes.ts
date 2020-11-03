import express from 'express';

import userController from '@api/user/user-controller';

const router: express.Router = express.Router();

router.post('/signup', userController.signup);

export default router;
