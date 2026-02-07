const express = require('express');
const {
    submitFeedback,
    getAllFeedback,
    getFeedbackStats,
} = require('../controllers/feedbackController');
const { protect } = require('../middleware/auth');
const { checkRole } = require('../middleware/roleCheck');

const router = express.Router();

router.post('/submit', protect, submitFeedback);
router.get('/all', protect, checkRole('founder'), getAllFeedback);
router.get('/stats', protect, checkRole('founder'), getFeedbackStats);

module.exports = router;
