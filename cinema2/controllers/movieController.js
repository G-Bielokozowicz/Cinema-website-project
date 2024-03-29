const router = require('express').Router()
let Movie = require('../models/movie.model')
const asyncHandler = require('express-async-handler')
let Screening = require('../models/screening.model')
var endOfDay = require('date-fns/endOfDay') 
var startOfDay = require('date-fns/startOfDay') 

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
        res.status(400).json('Permission denied')
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

const getMoviesByDate = asyncHandler(async(req,res)=>{
    const date = req.params['date']

    const screenings = await Screening.find({
        screeningDate:{
            $gte: startOfDay(new Date(date)),
            $lte: endOfDay(new Date(date))
        },
    }).populate([
        {
            path: "screeningMovie"
        }
    ])

    let moviesid = []

    for (let i = 0;i<screenings.length;i++){
        moviesid.push(screenings[i].screeningMovie)
    }
    let ret = [... new Set(moviesid)]
    res.status(200).json(
        ret
    )
})

module.exports = {getAllMovies,getMovieByName,getMovieById,addMovie,getMoviesByDate}