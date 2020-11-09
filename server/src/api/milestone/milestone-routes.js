const express = require('express');

const milestoneController = require('@api/milestone/milestone-controller');

const router = express.Router();

router.post('/', milestoneController.insertMilestone);

module.exports = router;
