const express = require('express');

const labelController = require('@api/label/label-controller');

const router = express.Router();

router.delete('/:id', labelController.deleteById);
router.put('/:id', labelController.updateLabel);
router.get('/', labelController.getLabels);

module.exports = router;
