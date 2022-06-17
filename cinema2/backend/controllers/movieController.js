const router = require('express').Router()
let Movie = require('../models/movie.model')
const asyncHandler = require('express-async-handler')

const getAllMovies = asyncHandler(async(req, res)=>{
    Movie.find()
    .then(movies=>res.json(movies))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const getMovieByName = asyncHandler (async(req, res)=>{
    const movieName = req.params['movie']
   
    Movie.find({
        movieName: new RegExp(movieName, 'i')
        
    })
    .then(movies=>res.json(movies))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const getMovieById = asyncHandler(async(req,res)=>{
    const movieID = req.params['movie']
    Movie.findById(movieID)
    .then(movies=>res.json(movies))
    .catch(err=>res.status(400).json('Error: '+err));
})

const addMovie = asyncHandler(async(req,res)=>{

    if(req.user.userType!=='admin'){
        res.status(400)
        throw new Error('Permission denied')
    }
    const movieName = req.body.movieName
    const movieDirector = req.body.movieDirector
    const movieLength = Number(req.body.movieLength)
    const movieDescription = req.body.movieDescription
    const movieReleaseYear = Number(req.body.movieReleaseYear)
    const moviePosterURL = req.body.moviePosterURL


    const newMovie = new Movie({
        movieName,
        movieDirector,
        movieLength,
        movieDescription,
        movieReleaseYear,
        moviePosterURL,
    });

    newMovie.save()
    .then(() => res.json('Movie added'))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = {getAllMovies,getMovieByName,getMovieById,addMovie}