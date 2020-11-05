const express = require('express');
const passport = require('@passport');

const userController = require('@api/user/user-controller');
const { loginAuth } = require('@middlewares/auth');

const router = express.Router();

router.post('/signup', userController.signup);

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  userController.gitHubCallback,
);

router.post('/signin', loginAuth);

module.exports = router;
