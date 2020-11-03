const express = require('express');

const userController = require('@api/user/user-controller');

const router = express.Router();

router.post('/signup', userController.signup);

module.exports = router;
