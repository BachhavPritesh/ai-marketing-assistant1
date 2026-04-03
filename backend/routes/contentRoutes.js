const express = require('express');
const router = express.Router();
const { generate, predict } = require('../controllers/contentController');

router.post('/generate', generate);
router.post('/predict', predict);

module.exports = router;