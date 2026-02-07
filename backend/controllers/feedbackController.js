const Feedback = require('../models/Feedback');

// @desc    Submit feedback
// @route   POST /api/feedback/submit
// @access  Private
const submitFeedback = async (req, res) => {
    try {
        const { type, source, feedbackText, rating, category, submittedByName } = req.body;

        const feedback = await Feedback.create({
            startupId: req.user.startupId,
            type,
            source,
            feedbackText,
            rating,
            category,
            submittedBy: type === 'internal' ? req.user._id : null,
            submittedByName: type === 'external' ? submittedByName : null,
        });

        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all feedback
// @route   GET /api/feedback/all
// @access  Private (Founder)
const getAllFeedback = async (req, res) => {
    try {
        const { type, category } = req.query;

        const filter = { startupId: req.user.startupId };

        if (type) filter.type = type;
        if (category) filter.category = category;

        const feedback = await Feedback.find(filter)
            .populate('submittedBy', 'name email')
            .sort({ createdAt: -1 });

        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get feedback statistics
// @route   GET /api/feedback/stats
// @access  Private (Founder)
const getFeedbackStats = async (req, res) => {
    try {
        const allFeedback = await Feedback.find({ startupId: req.user.startupId });

        const totalCount = allFeedback.length;
        const internalCount = allFeedback.filter(f => f.type === 'internal').length;
        const externalCount = allFeedback.filter(f => f.type === 'external').length;

        const feedbackWithRatings = allFeedback.filter(f => f.rating);
        const averageRating = feedbackWithRatings.length > 0
            ? feedbackWithRatings.reduce((sum, f) => sum + f.rating, 0) / feedbackWithRatings.length
            : 0;

        const categoryBreakdown = {};
        allFeedback.forEach(f => {
            if (f.category) {
                categoryBreakdown[f.category] = (categoryBreakdown[f.category] || 0) + 1;
            }
        });

        res.json({
            totalCount,
            internalCount,
            externalCount,
            averageRating: averageRating.toFixed(2),
            categoryBreakdown,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    submitFeedback,
    getAllFeedback,
    getFeedbackStats,
};
