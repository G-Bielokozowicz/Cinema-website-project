const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const userSchema = new Schema({
    userEmail: {
        type: String,
        require: true,
        unique: true,
        minlength: 3,
    },
    userPassword: {
        type: String,
        require: true,
    },
    userType: {
        type: Number,
        require: true,
    },
    userBoughtTickets: {
        type: Array,
        require: false,
    },
    })

const User = mongoose.model('User',userSchema)
module.exports=User