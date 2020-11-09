const express = require('express');

const milestoneController = require('@api/milestone/milestone-controller');

const router = express.Router();

router.get('/', milestoneController.getMilestones);

module.exports = router;
