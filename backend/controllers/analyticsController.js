const Task = require('../models/Task');
const Milestone = require('../models/Milestone');
const Feedback = require('../models/Feedback');
const User = require('../models/User');

// @desc    Get dashboard metrics
// @route   GET /api/analytics/dashboard
// @access  Private (Founder)
const getDashboardMetrics = async (req, res) => {
    try {
        const startupId = req.user.startupId;

        // Task metrics
        const totalTasks = await Task.countDocuments({ startupId });
        const completedTasks = await Task.countDocuments({ startupId, status: 'completed' });
        const completionRate = totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(2) : 0;

        // Milestone metrics
        const totalMilestones = await Milestone.countDocuments({ startupId });
        const completedMilestones = await Milestone.countDocuments({ startupId, status: 'completed' });
        const activeMilestones = await Milestone.countDocuments({ startupId, status: 'in_progress' });

        // Feedback metrics
        const allFeedback = await Feedback.find({ startupId });
        const totalFeedback = allFeedback.length;
        const feedbackWithRatings = allFeedback.filter(f => f.rating);
        const averageFeedbackRating = feedbackWithRatings.length > 0
            ? (feedbackWithRatings.reduce((sum, f) => sum + f.rating, 0) / feedbackWithRatings.length).toFixed(2)
            : 0;

        // Team metrics
        const teamMemberCount = await User.countDocuments({ startupId });

        res.json({
            tasks: {
                total: totalTasks,
                completed: completedTasks,
                completionRate: parseFloat(completionRate),
            },
            milestones: {
                total: totalMilestones,
                completed: completedMilestones,
                active: activeMilestones,
            },
            feedback: {
                total: totalFeedback,
                averageRating: parseFloat(averageFeedbackRating),
            },
            team: {
                memberCount: teamMemberCount,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get task completion trend
// @route   GET /api/analytics/tasks-trend
// @access  Private (Founder)
const getTaskTrend = async (req, res) => {
    try {
        const startupId = req.user.startupId;
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const completedTasks = await Task.find({
            startupId,
            status: 'completed',
            completedAt: { $gte: thirtyDaysAgo },
        }).select('completedAt');

        // Group by date
        const trendData = {};
        completedTasks.forEach(task => {
            if (task.completedAt) {
                const date = task.completedAt.toISOString().split('T')[0];
                trendData[date] = (trendData[date] || 0) + 1;
            }
        });

        // Convert to array format
        const trend = Object.keys(trendData).map(date => ({
            date,
            count: trendData[date],
        })).sort((a, b) => new Date(a.date) - new Date(b.date));

        res.json(trend);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get feedback trend
// @route   GET /api/analytics/feedback-trend
// @access  Private (Founder)
const getFeedbackTrend = async (req, res) => {
    try {
        const startupId = req.user.startupId;
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const recentFeedback = await Feedback.find({
            startupId,
            createdAt: { $gte: thirtyDaysAgo },
        }).select('createdAt rating');

        // Group by date and rating
        const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        recentFeedback.forEach(feedback => {
            if (feedback.rating) {
                ratingDistribution[feedback.rating]++;
            }
        });

        res.json(ratingDistribution);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get AI insights (Rule-based)
// @route   GET /api/analytics/insights
// @access  Private (Founder)
const getInsights = async (req, res) => {
    try {
        const startupId = req.user.startupId;
        const insights = [];

        // Calculate task completion rate
        const totalTasks = await Task.countDocuments({ startupId });
        const completedTasks = await Task.countDocuments({ startupId, status: 'completed' });
        const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

        // Insight 1: Execution risk based on completion rate
        if (completionRate < 30) {
            insights.push({
                type: 'warning',
                title: 'Execution Risk Alert',
                message: `Your task completion rate is ${completionRate.toFixed(1)}%. Consider reviewing task assignments and deadlines.`,
            });
        } else if (completionRate > 70) {
            insights.push({
                type: 'success',
                title: 'Strong Execution',
                message: `Great job! ${completionRate.toFixed(1)}% task completion rate shows strong execution.`,
            });
        }

        // Insight 2: Feedback validation
        const allFeedback = await Feedback.find({ startupId });
        const feedbackWithRatings = allFeedback.filter(f => f.rating);
        const avgRating = feedbackWithRatings.length > 0
            ? feedbackWithRatings.reduce((sum, f) => sum + f.rating, 0) / feedbackWithRatings.length
            : 0;

        if (avgRating > 0 && avgRating < 3) {
            insights.push({
                type: 'warning',
                title: 'Validation Concerns',
                message: `Average feedback rating is ${avgRating.toFixed(1)}/5. Consider gathering more user insights and iterating on your solution.`,
            });
        } else if (avgRating >= 4) {
            insights.push({
                type: 'success',
                title: 'Strong Validation',
                message: `Excellent feedback with ${avgRating.toFixed(1)}/5 average rating. Your solution resonates with users!`,
            });
        }

        // Insight 3: Activity check
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const recentTasks = await Task.countDocuments({
            startupId,
            createdAt: { $gte: sevenDaysAgo },
        });

        if (recentTasks === 0) {
            insights.push({
                type: 'info',
                title: 'Low Activity Warning',
                message: 'No tasks created in the last 7 days. Maintain momentum by setting clear goals and breaking them into actionable tasks.',
            });
        }

        // Insight 4: Recommended next milestone
        const completedMilestones = await Milestone.countDocuments({ startupId, status: 'completed' });
        const activeMilestones = await Milestone.countDocuments({ startupId, status: 'in_progress' });

        if (completedMilestones > 0 && activeMilestones === 0) {
            insights.push({
                type: 'info',
                title: 'Recommended Action',
                message: 'Consider creating your next milestone to maintain progress. Common next steps: User Testing, Beta Launch, or Product Iteration.',
            });
        }

        res.json({ insights });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDashboardMetrics,
    getTaskTrend,
    getFeedbackTrend,
    getInsights,
};
