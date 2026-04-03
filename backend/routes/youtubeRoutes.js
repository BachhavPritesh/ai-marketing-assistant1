const express = require('express');
const router = express.Router();
const { getTrending } = require('../controllers/youtubeController');

router.get('/trending', getTrending);

module.exports = router;
