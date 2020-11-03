const express = require('express');
const issueController = require('@api/issue/issue-controller');

const router = express.Router();

// 이슈 전체목록 가져오기.
router.get('/', issueController.getIssues);
router.put('/:issue_id/milestone/:milestone_id', issueController.updateIssueByMilestone);
router.delete('/:issue_id/label/:label_id', issueController.deleteIssueByLabel);
//router.delete('issue/:issue_id/label/:label_id', '');

module.exports = router;
