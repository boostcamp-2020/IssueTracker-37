const express = require('express');

const issueController = require('@api/issue/issue-controller');

const router = express.Router();

router.get('/', issueController.getIssues);
router.put(
  '/:issue_id/milestone/:milestone_id',
  issueController.updateIssueByMilestone,
);
router.delete('/:issue_id/label/:label_id', issueController.deleteIssueByLabel);
router.get('/:issue_id', issueController.getOneById);
router.post('/:issue_id/comment/', issueController.createComment);
router.post('/:issue_id/label/:label_id', issueController.postIssueToLabel);
router.delete(
  '/:issue_id/assignee/:assignee_id',
  issueController.deleteAssignee,
);
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

router.post('/', issueController.create);

router.put('/:issue_id', issueController.update);

router.delete('/:issue_id', issueController.delete);

router.put('/:issue_id/comment/:comment_id', issueController.updateComment);

module.exports = router;
