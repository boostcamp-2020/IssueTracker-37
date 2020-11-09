const express = require('express');

const milestoneController = require('@api/milestone/milestone-controller');

const router = express.Router();

router.put('/:id', milestoneController.updateMilestoneById);

module.exports = router;
