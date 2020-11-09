const express = require('express');

const labelController = require('@api/label/label-controller');

const router = express.Router();

router.put('/:id', labelController.updateLabel)

module.exports = router;
