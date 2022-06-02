const { Schema } = require("mongoose");
const mongoose = require('mongoose');

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
    userBoughtTickets: {
        type: Array,
        required: false,
    },
    })

const User = mongoose.model('User',userSchema)
module.exports = User