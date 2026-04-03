const express = require('express');
const router = express.Router();
const { getBestTimes, getFormats } = require('../controllers/strategyController');

router.get('/best-times', getBestTimes);
router.get('/formats', getFormats);

module.exports = router;