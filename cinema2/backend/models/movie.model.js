const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const movieSchema = new Schema({
    movieName: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
    },
    movieDirector: {
        type: String,
        required: true
    },
    movieLength:{
        type: Number,
        required: true,
    },
    movieDescription:{
        type: String,
        required: true,
    },
    movieReleaseYear:{
        type: Number,
        required: true,
    },
    moviePosterURL:{
        type: String,
        required: true,
    },
    })

const Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie