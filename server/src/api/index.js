const express = require('express');
const userRouter = require('@api/user/user-routes');
const issueRouter = require('@api/issue/issue-routes');

const milestoneRouter = require('@api/milestone/milestone-routes');
const labelRouter = require('@api/label/label-routes');
const { apiAuth } = require('@middlewares/auth');

const router = express.Router();

router.use('/user', userRouter);

router.use(apiAuth);

router.use('/issue', issueRouter);
router.use('/label', labelRouter);
router.use('/milestone', milestoneRouter);

router.use('/milestone', milestoneRouter);

router.use('/label', labelRouter);

module.exports = router;
