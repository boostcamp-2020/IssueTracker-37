const express = require('express');

const issueController = require('@api/issue/issue-controller');

const router = express.Router();

router.delete(
  '/:issue_id/comment/:comment_id',
  issueController.deleteCommentByIssue,
);

router.delete(
  '/:issue_id/milestone/:milestone_id',
  issueController.deleteMilestoneByIssue,
);

router.post(
  '/:issue_id/assignee/:assignee_id',
  issueController.insertAssigneeByIssue,
);

module.exports = router;
