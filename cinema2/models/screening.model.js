const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const screeningSchema = new Schema({
    screeningMovie: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie',
    },
    screeningRoom:{
        type: Number,
        required: true,
       // ref: 'Room',
    },
    screeningDate: {
        type: Date,
        required: true,
    },
    screeningPriceNormal:{
        type: Number,
        required: true,
    },
    screeningPriceReduced:{
        type: Number,
        required: true,
    }
})

const Screening = mongoose.model('Screening',screeningSchema)
module.exports = Screening