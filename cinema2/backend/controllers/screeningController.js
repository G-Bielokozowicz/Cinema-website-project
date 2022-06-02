const router = require('express').Router()
const asyncHandler = require('express-async-handler')
let Movie = require('../models/movie.model')
let Screening = require('../models/screening.model')

const getAllScreenings = asyncHandler(async(req,res)=>{
    Screening.find()
    .then(screenings=>res.json(screenings))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const addScreening = asyncHandler(async(req,res)=>{
    const screeningMovieName = req.body.screeningMovieName
    const screeningRoom = Number(req.body.screeningRoom)
    const screeningDate = req.body.screeningDate

    const movie = await Movie.findOne({movieName: screeningMovieName})
    if (movie){
        const newScreening = new Screening({
            screeningMovieName,
            screeningRoom,
            screeningDate
        })
        newScreening.save()
        .then(()=>res.json('Screening added'))
        .catch(err => res.status(400).json('Error: ' + err));
        
    } else {
        res.json('No movie exists with this name')
    }
})

module.exports = {getAllScreenings,addScreening}