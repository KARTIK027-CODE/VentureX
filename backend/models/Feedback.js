const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
    {
        startupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Startup',
            required: true,
        },
        type: {
            type: String,
            enum: ['internal', 'external'],
            required: true,
        },
        source: {
            type: String,
            trim: true,
        },
        feedbackText: {
            type: String,
            required: [true, 'Please provide feedback text'],
            trim: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
        },
        category: {
            type: String,
            enum: ['idea', 'execution', 'product', 'market'],
        },
        submittedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        submittedByName: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Feedback', feedbackSchema);
