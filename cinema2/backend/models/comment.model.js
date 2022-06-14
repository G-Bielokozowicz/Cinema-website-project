const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const commentSchema = new Schema({
    commentUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    commentMovie:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie',
    },
    commentBody: {
        type: String,
        required: true,
    }
})

const Comment = mongoose.model('Comment',commentSchema)
module.exports = Comment