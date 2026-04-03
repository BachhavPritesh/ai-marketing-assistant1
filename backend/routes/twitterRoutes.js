const express = require('express');
const router = express.Router();
const { getTrending } = require('../controllers/twitterController');

router.get('/trending', getTrending);

module.exports = router;
