const express = require('express');
const router = express.Router();
const { getOverview, getAnalytics, refreshAnalytics, getPlatformAnalytics } = require('../controllers/analyticsController');
const { protect } = require('../middleware/authMiddleware');

router.get('/overview', protect, getOverview);
router.get('/', protect, getAnalytics);
router.post('/refresh', protect, refreshAnalytics);
router.get('/platform/:platform', protect, getPlatformAnalytics);

module.exports = router;
