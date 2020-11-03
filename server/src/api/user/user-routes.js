const express = require('express');

const userController = require('@api/user/user-controller');
const passport = require('@passport');

const router = express.Router();

router.post('/signup', userController.signup);

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  userController.gitHubCallback,
);

module.exports = router;
