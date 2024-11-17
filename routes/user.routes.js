const express = require('express');
const { registerUser, loginUser, uploadAssignment } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', authMiddleware('user'), uploadAssignment);

module.exports = router;
