const Task = require('../models/Task');
const Milestone = require('../models/Milestone');

// @desc    Create milestone
// @route   POST /api/tasks/milestone
// @access  Private (Founder)
const createMilestone = async (req, res) => {
    try {
        const { title, description, targetDate } = req.body;

        const milestone = await Milestone.create({
            startupId: req.user.startupId,
            title,
            description,
            targetDate,
            createdBy: req.user._id,
        });

        res.status(201).json(milestone);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all milestones
// @route   GET /api/tasks/milestones
// @access  Private
const getMilestones = async (req, res) => {
    try {
        const milestones = await Milestone.find({ startupId: req.user.startupId })
            .populate('createdBy', 'name')
            .sort({ createdAt: -1 });

        res.json(milestones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update milestone
// @route   PUT /api/tasks/milestone/:id
// @access  Private (Founder)
const updateMilestone = async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.id);

        if (!milestone) {
            return res.status(404).json({ message: 'Milestone not found' });
        }

        const { title, description, targetDate, status } = req.body;

        milestone.title = title || milestone.title;
        milestone.description = description || milestone.description;
        milestone.targetDate = targetDate || milestone.targetDate;
        milestone.status = status || milestone.status;

        if (status === 'completed' && !milestone.completedAt) {
            milestone.completedAt = new Date();
        }

        const updatedMilestone = await milestone.save();

        res.json(updatedMilestone);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete milestone
// @route   DELETE /api/tasks/milestone/:id
// @access  Private (Founder)
const deleteMilestone = async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.id);

        if (!milestone) {
            return res.status(404).json({ message: 'Milestone not found' });
        }

        await milestone.deleteOne();

        res.json({ message: 'Milestone deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create task
// @route   POST /api/tasks/task
// @access  Private (Founder)
const createTask = async (req, res) => {
    try {
        const { milestoneId, title, description, assignedTo, priority } = req.body;

        const task = await Task.create({
            milestoneId,
            startupId: req.user.startupId,
            title,
            description,
            assignedTo,
            priority,
            createdBy: req.user._id,
        });

        const populatedTask = await Task.findById(task._id)
            .populate('assignedTo', 'name email')
            .populate('createdBy', 'name');

        res.status(201).json(populatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get tasks
// @route   GET /api/tasks/tasks
// @access  Private
const getTasks = async (req, res) => {
    try {
        const { milestoneId, status } = req.query;

        const filter = { startupId: req.user.startupId };

        if (milestoneId) filter.milestoneId = milestoneId;
        if (status) filter.status = status;

        const tasks = await Task.find(filter)
            .populate('assignedTo', 'name email')
            .populate('createdBy', 'name')
            .populate('milestoneId', 'title')
            .sort({ createdAt: -1 });

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update task
// @route   PUT /api/tasks/task/:id
// @access  Private (Assigned user or Founder)
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Check if user is assigned to task or is the founder
        const isAssigned = task.assignedTo && task.assignedTo.toString() === req.user._id.toString();
        const isFounder = req.user.role === 'founder';

        if (!isAssigned && !isFounder) {
            return res.status(403).json({ message: 'Not authorized to update this task' });
        }

        const { title, description, status, assignedTo, priority } = req.body;

        if (title) task.title = title;
        if (description) task.description = description;
        if (status) task.status = status;
        if (assignedTo) task.assignedTo = assignedTo;
        if (priority) task.priority = priority;

        if (status === 'completed' && !task.completedAt) {
            task.completedAt = new Date();
        }

        const updatedTask = await task.save();

        const populatedTask = await Task.findById(updatedTask._id)
            .populate('assignedTo', 'name email')
            .populate('createdBy', 'name');

        res.json(populatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete task
// @route   DELETE /api/tasks/task/:id
// @access  Private (Founder)
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.deleteOne();

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createMilestone,
    getMilestones,
    updateMilestone,
    deleteMilestone,
    createTask,
    getTasks,
    updateTask,
    deleteTask,
};
