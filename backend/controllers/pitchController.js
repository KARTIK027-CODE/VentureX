const Startup = require('../models/Startup');
const Task = require('../models/Task');
const Milestone = require('../models/Milestone');
const Feedback = require('../models/Feedback');
const User = require('../models/User');

// @desc    Generate pitch outline
// @route   GET /api/pitch/generate
// @access  Private (Founder)
const generatePitch = async (req, res) => {
    try {
        const startupId = req.user.startupId;

        // Get startup data
        const startup = await Startup.findById(startupId).populate('teamMembers', 'name email role');

        if (!startup) {
            return res.status(404).json({ message: 'Startup not found' });
        }

        // Get traction metrics
        const totalTasks = await Task.countDocuments({ startupId });
        const completedTasks = await Task.countDocuments({ startupId, status: 'completed' });
        const completedMilestones = await Milestone.countDocuments({ startupId, status: 'completed' });

        const allFeedback = await Feedback.find({ startupId });
        const feedbackWithRatings = allFeedback.filter(f => f.rating);
        const avgFeedbackRating = feedbackWithRatings.length > 0
            ? (feedbackWithRatings.reduce((sum, f) => sum + f.rating, 0) / feedbackWithRatings.length).toFixed(2)
            : 0;

        // Get upcoming milestones
        const upcomingMilestones = await Milestone.find({
            startupId,
            status: { $in: ['pending', 'in_progress'] },
        }).select('title description targetDate').sort({ targetDate: 1 }).limit(5);

        // Generate pitch
        const pitch = {
            problem: startup.problemStatement || 'Define the problem your startup is solving.',
            solution: startup.solution || 'Describe your innovative solution.',
            market: {
                domain: startup.domain,
                stage: startup.stage,
                description: `Operating in the ${startup.domain} sector at ${startup.stage} stage.`,
            },
            traction: {
                tasksCompleted: completedTasks,
                totalTasks: totalTasks,
                completionRate: totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(1) : 0,
                milestonesAchieved: completedMilestones,
                feedbackScore: avgFeedbackRating,
                feedbackCount: allFeedback.length,
                summary: `Achieved ${completedMilestones} milestone(s) with ${completedTasks} tasks completed. Customer validation score: ${avgFeedbackRating}/5 (${allFeedback.length} feedback responses).`,
            },
            team: startup.teamMembers.map(member => ({
                name: member.name,
                role: member.role,
                email: member.email,
            })),
            roadmap: upcomingMilestones.map(milestone => ({
                title: milestone.title,
                description: milestone.description,
                targetDate: milestone.targetDate,
            })),
            vision: startup.vision || 'Our vision is to transform the industry.',
        };

        res.json(pitch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    generatePitch,
};
