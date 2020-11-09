const express = require('express');

const labelController = require('@api/label/label-controller');

const router = express.Router();

router.get('/', labelController.getLabels);

module.exports = router;
