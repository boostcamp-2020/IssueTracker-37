const express = require('express');

const userController = require('@api/user/user-controller');
const { loginAuth } = require('@middlewares/auth');
const { apiAuth } = require('@middlewares/auth');

const router = express.Router();

router.post('/signup', userController.signup);

router.get('/github', userController.gitHubOAuthRedirect);
router.get('/github/callback', userController.gitHubCallback);

router.get('/', apiAuth, userController.getUsers);

router.post('/signin', loginAuth);

module.exports = router;
