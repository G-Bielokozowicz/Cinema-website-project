const router = require('express').Router()
let Screening = require('../models/screening.model')

const getAllScreenings = require('../controllers/screeningController')

router.get('/',getAllScreenings)

module.exports=router