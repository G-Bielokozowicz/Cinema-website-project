const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const movieSchema = new Schema({
    movieName: {
        type: String,
        require: true,
        unique: true,
        minlength: 1,
    },
    movieDirector: {
        type: String,
        require: true
    },
    movieLength:{
        type: Number,
        required: true,
    },
    movieDescription:{
        type: String,
        require: true,
    },
    movieReleaseYear:{
        type: Number,
        require: true,
    },
    moviePosterURL:{
        type: String,
        require: true,
    },
    })

const Movie = mongoose.model('Movie',movieSchema)
module.exports = Movie