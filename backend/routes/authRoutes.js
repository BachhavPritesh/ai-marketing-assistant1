const express = require('express');
const router = express.Router();
const { register, login, googleAuth, googleCallback, getMe, connectPlatform, disconnectPlatform, getConnectedPlatforms } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/google', googleAuth);
router.get('/google/callback', googleCallback);
router.get('/me', authMiddleware, getMe);
router.get('/connected-platforms', authMiddleware, getConnectedPlatforms);
router.post('/connect-platform', authMiddleware, connectPlatform);
router.post('/disconnect-platform', authMiddleware, disconnectPlatform);

module.exports = router;
