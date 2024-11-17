const express = require('express');
const { getAssignments, updateAssignmentStatus } = require('../controllers/admin.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/assignments', authMiddleware('admin'), getAssignments);
router.post('/assignments/:id', authMiddleware('admin'), updateAssignmentStatus);

module.exports = router;
