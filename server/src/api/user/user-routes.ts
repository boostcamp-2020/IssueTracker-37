import express, { Request, Response } from 'express';

import userController from './user-controller';
import passport from '../../middlewares/passport-github';

const router: express.Router = express.Router();

router.post('/signup', userController.signup);

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  (req: Request, res: Response) => {
    return res.json({ state: 'success' });
  },
);

export default router;
