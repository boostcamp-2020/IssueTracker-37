const express = require('express');

const issueController = require('@api/issue/issue-controller');

const router = express.Router();

router.get('/:issue_id', issueController.getOneById);
router.post('/:issue_id/label/:label_id', issueController.postIssueToLabel);

module.exports = router;
