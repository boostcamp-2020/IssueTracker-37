const express = require('express');
const userRouter = require('@api/user/user-routes');

const router = express.Router();

router.use('/user', userRouter);

module.exports = router;
