const { Schema } = require("mongoose");
const mongoose = require('mongoose');

// TODO add updating user ticket array

const userSchema = new Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    userPassword: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
})

const User = mongoose.model('User',userSchema)
module.exports = User