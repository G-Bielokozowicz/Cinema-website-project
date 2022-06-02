const router = require('express').Router()
let Screening = require('../models/screening.model')

const {getAllScreenings,addScreening} = require('../controllers/screeningController')

router.get('/',getAllScreenings)
router.post('/add',addScreening)

module.exports=router