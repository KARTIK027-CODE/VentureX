const express = require('express');
const {
    getDashboardMetrics,
    getTaskTrend,
    getFeedbackTrend,
    getInsights,
} = require('../controllers/analyticsController');
const { protect } = require('../middleware/auth');
const { checkRole } = require('../middleware/roleCheck');

const router = express.Router();

router.get('/dashboard', protect, checkRole('founder'), getDashboardMetrics);
router.get('/tasks-trend', protect, checkRole('founder'), getTaskTrend);
router.get('/feedback-trend', protect, checkRole('founder'), getFeedbackTrend);
router.get('/insights', protect, checkRole('founder'), getInsights);

module.exports = router;
