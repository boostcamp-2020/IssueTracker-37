const express = require('express');

const milestoneController = require('@api/milestone/milestone-controller');

const router = express.Router();

router.put('/:id', milestoneController.updateMilestoneById);
router.post('/', milestoneController.insertMilestone);
router.get('/', milestoneController.getMilestones);
router.delete('/:id', milestoneController.deleteMilestoneById);

module.exports = router;
