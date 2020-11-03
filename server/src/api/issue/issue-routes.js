const express = require('express');

const issueController = require('@api/issue/issue-controller');

// const passport = require('@passport');

const router = express.Router();

// router.post('/', passport.authenticate('jwt'), issueController.create);
router.post('/', issueController.create);

router.put('/:issue_id', issueController.update);

router.delete('/:issue_id', issueController.delete);

module.exports = router;
