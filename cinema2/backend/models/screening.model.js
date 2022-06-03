const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const screeningSchema = new Schema({
    screeningMovieID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie',
    },
    screeningMovieName: {
        type: String,
        required: true,
    },
    screeningRoom:{
        type: Number,
        required: true,
       // ref: 'Room',
    },
    screeningDate: {
        type: Date,
        required: true,
    }
})

const Screening = mongoose.model('Screening',screeningSchema)
module.exports = Screening