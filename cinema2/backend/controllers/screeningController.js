const router = require('express').Router()
const asyncHandler = require('express-async-handler')
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

    // // Check if screening in this room, and at this time exists
    // const existingScreening = await Screening.find({screeningRoom: 1})
    // if (existingScreening){
    //     console.log('screening found in room: ' + existingScreening.screeningRoom)
    //     console.log('Screening id: ' + existingScreening._id)
    // }

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

module.exports = {getAllScreenings,addScreening, deleteScreening}