const express = require('express');

const issueController = require('@api/issue/issue-controller');

const router = express.Router();

router.delete(
  '/:issue_id/comment/:comment_id',
  issueController.deleteCommentByIssue,
);

module.exports = router;
