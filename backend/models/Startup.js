const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide startup name'],
            trim: true,
        },
        domain: {
            type: String,
            required: [true, 'Please provide startup domain'],
            trim: true,
        },
        stage: {
            type: String,
            enum: ['ideation', 'mvp', 'beta', 'early_traction'],
            required: [true, 'Please provide startup stage'],
        },
        vision: {
            type: String,
            trim: true,
        },
        problemStatement: {
            type: String,
            trim: true,
        },
        solution: {
            type: String,
            trim: true,
        },
        founderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        teamMembers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Startup', startupSchema);
