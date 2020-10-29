import express from 'express';
import passport from '../../passport/user-github';

const router: express.Router = express.Router();

// GitHub Login
router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  (req: express.Request, res: express.Response, next) => {
    res.cookie('token', 'test', { maxAge: 10000000, httpOnly: true });
    res.redirect('http://localhost:3001/');
    // res.json(req.user);
  },
);

export default router;
