// models/Tweet.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    replies : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ],
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tweet', tweetSchema);