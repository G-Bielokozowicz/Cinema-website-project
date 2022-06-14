const router = require('express').Router()
const asyncHandler = require('express-async-handler')
var endOfDay = require('date-fns/endOfDay') 
var startOfDay = require('date-fns/startOfDay') 
let Movie = require('../models/movie.model')
let Screening = require('../models/screening.model')

const getAllScreenings = asyncHandler(async(req,res)=>{
    Screening.find()
    .populate('screeningMovie')
    .then(screenings=>res.json(screenings))
    .catch(err=>res.status(400).json('Error: ' + err));
    
})

const addScreening = asyncHandler(async(req,res)=>{

    // Check if user is admin
    if(req.user.userType!=='admin'){
        res.status(400)
        throw new Error('Permission denied')
    }

    const screeningMovie = req.body.screeningMovie
    const screeningRoom = Number(req.body.screeningRoom)
    const screeningDate = new Date (req.body.screeningDate)

    // Check if movie exists in database
    const movie = await Movie.findById(screeningMovie)
    // No movie in database
    if (!movie){
        res.status(400).json('No movie exists with this name')
    } 

    // Check if screening in this room, and at this time exists
    const existingScreening = await Screening.find({screeningRoom:screeningRoom}).populate('screeningMovie')
    if (existingScreening){
        for (let i=0;i<existingScreening.length;i++){

            // Difference between screening times in hours
            let diff = Math.abs(screeningDate-existingScreening[i].screeningDate)/1000/3600
            
            // Length of the movie in hours of existing screening
            let existingMovieLength = existingScreening[i].screeningMovie.movieLength/60

            // Length of the movie in hours of added screening
            let addedMovieLength=movie.movieLength/60

            // Added screening is after existing, so diffrence between them should be more than to existing screening movie length + 20 minutes
            if (diff<existingMovieLength+(20/60) && screeningDate>=existingScreening[i].screeningDate){
                res.status(400)
                throw new Error('Not enough time')

            // Added screening is before existing, so difference between them should be more than new screening movie length + 20 minutes
            } else if (diff<addedMovieLength+(20/60)){
                res.status(400)
                throw new Error('Not enough time')
            } else {
                continue
            }
        }
    }

    // Add screening
    const newScreening = new Screening({
        screeningMovie,
        screeningRoom,
        screeningDate
    })
    newScreening.save()
    .then(()=>res.json({
        message: "Screening added",
        screeningMovieName: movie.movieName
    }))
    .catch(err => res.status(400).json('Error: ' + err));
})


const deleteScreening = asyncHandler(async(req,res)=>{

    // Check if user is admin
    if(req.user.userType!=='admin'){
        res.status(400)
        throw new Error('Permission denied')
    }

    // Find screening
    const screening= await Screening.findById(req.body.screeningId)

    // No screening
    if (!screening){
        res.status(400)
        throw new Error('Screening not found')
    }
    // Remove screening
    await screening.remove()
    res.status(200).json({
        message: "Screening removed",
        id: req.params.id,
        name: screening.screeningMovieName
    })
})

const getTodayScreenings = asyncHandler(async(req,res)=>{
    Screening.find({
        screeningDate:{
            $gte: startOfDay(new Date()),
            $lte: endOfDay(new Date())
        }
    })
    .populate('screeningMovie')
    .then(screenings=>res.json(screenings))
    .catch(err=>res.status(400).json('Error: ' + err));

    console.log(startOfDay(new Date()))
})

module.exports = {getAllScreenings,addScreening, deleteScreening,getTodayScreenings}