const express = require('express');
const userRouter = require('@api/user/user-routes');
const issueRouter = require('@api/issue/issue-router');

const router = express.Router();

router.use('/user', userRouter);
router.use('/issue', issueRouter);

module.exports = router;
