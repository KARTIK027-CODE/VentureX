const mongoose = require('mongoose');

const milestoneSchema = new mongoose.Schema(
    {
        startupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Startup',
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Please provide milestone title'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        targetDate: {
            type: Date,
        },
        status: {
            type: String,
            enum: ['pending', 'in_progress', 'completed'],
            default: 'pending',
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

module.exports = mongoose.model('Milestone', milestoneSchema);
