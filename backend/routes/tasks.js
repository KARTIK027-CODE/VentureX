const express = require('express');
const {
    createMilestone,
    getMilestones,
    updateMilestone,
    deleteMilestone,
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');
const { checkRole } = require('../middleware/roleCheck');

const router = express.Router();

// Milestone routes
router.post('/milestone', protect, checkRole('founder'), createMilestone);
router.get('/milestones', protect, getMilestones);
router.put('/milestone/:id', protect, checkRole('founder'), updateMilestone);
router.delete('/milestone/:id', protect, checkRole('founder'), deleteMilestone);

// Task routes
router.post('/task', protect, checkRole('founder'), createTask);
router.get('/tasks', protect, getTasks);
router.put('/task/:id', protect, updateTask);
router.delete('/task/:id', protect, checkRole('founder'), deleteTask);

module.exports = router;
