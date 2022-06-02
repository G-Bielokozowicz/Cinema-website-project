const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const screeningSchema = new Schema({
    screeningMovieName: {
        type: String,
        required: true,
    },
    screeningRoom:{
        type: Number,
        required: true,
    },
    screeningDate: {
        type: Date,
        required: true,
    }
})

const Screening = mongoose.model('Screening',screeningSchema)
module.exports = Screening