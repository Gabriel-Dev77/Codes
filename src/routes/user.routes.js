const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { profile } = require('../controllers/userController');

const router = express.Router();
router.get('/me', authMiddleware, profile);

module.exports = router;