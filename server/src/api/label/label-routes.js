const express = require('express');

const labelController = require('@api/label/label-controller');

const router = express.Router();

router.delete('/:id', labelController.deleteById);

module.exports = router;
