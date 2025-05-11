const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    comment: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    },
    noOfRetweets: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;