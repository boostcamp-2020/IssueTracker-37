const express = require('express');

const milestoneController = require('@api/milestone/milestone-controller');

const router = express.Router();

router.get('/', milestoneController.getMilestones);
router.get('/:id', milestoneController.getMilestoneById);
router.post('/', milestoneController.insertMilestone);
router.put('/:id', milestoneController.updateMilestoneById);
router.delete('/:id', milestoneController.deleteMilestoneById);

module.exports = router;
