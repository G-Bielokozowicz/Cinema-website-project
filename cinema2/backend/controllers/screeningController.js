const router = require('express').Router()
const asyncHandler = require('express-async-handler')
let Movie = require('../models/movie.model')
let Screening = require('../models/screening.model')

const getAllScreenings = asyncHandler(async(req,res)=>{
    Screening.find()
    .then(screenings=>res.json(screenings))
    .catch(err=>res.status(400).json('Error: ' + err));
})

module.exports = getAllScreenings