const express = require('express');

const labelController = require('@api/label/label-controller');

const router = express.Router();

router.post('/', labelController.insertLabel);

module.exports = router;
