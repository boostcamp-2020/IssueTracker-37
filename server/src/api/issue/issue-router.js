const express = require('express');
const issueController = require('@api/issue/issue-controller');

const router = express.Router();

// 이슈 전체목록 가져오기.
router.get('/', issueController.getIssues);
router.post('/:issue_id/milestone/:milestone_id', issueController.addMilestone);

// router.post('/issue/:issue_id/milestone/:milestone_id', '');

// router.post('issue/:issue_id/comment', '');

// router.delete('issue/:issue_id/label/:label_id', '');

module.exports = router;
