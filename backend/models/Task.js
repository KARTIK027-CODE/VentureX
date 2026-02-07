const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        milestoneId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Milestone',
            required: true,
        },
        startupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Startup',
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Please provide task title'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        status: {
            type: String,
            enum: ['todo', 'in_progress', 'completed'],
            default: 'todo',
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'medium',
        },
        completedAt: {
            type: Date,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Task', taskSchema);
