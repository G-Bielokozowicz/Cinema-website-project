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

    if(req.user.userType!=='admin'){
        res.status(400)
        throw new Error('Permission denied')
    }

    const screeningMovieName = req.body.screeningMovieName
    const screeningRoom = Number(req.body.screeningRoom)
    const screeningDate = Date(req.body.screeningDate)

    const movie = await Movie.findOne({movieName: screeningMovieName})
    if (movie){
        const newScreening = new Screening({
            screeningMovieName,
            screeningRoom,
            screeningDate
        })
        newScreening.save()
        .then(()=>res.json({
            message: "Screening added",
            screeningMovieName: screeningMovieName

        }))
        .catch(err => res.status(400).json('Error: ' + err));
        
    } else {
        res.json('No movie exists with this name')
    }
})

const deleteScreening = asyncHandler(async(req,res)=>{
    const screening= await Screening.findById(req.body.screeningId)

    if(req.user.userType!=='admin'){
        res.status(400)
        throw new Error('Permission denied')
    }

    if (!screening){
        res.status(400)
        throw new Error('Screening not found')
    }
    await screening.remove()
    res.status(200).json({
        message: "Screening removed",
        id: req.params.id,
        name: screening.screeningMovieName
    })
})

module.exports = {getAllScreenings,addScreening, deleteScreening}