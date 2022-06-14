const router = require('express').Router()
let Screening = require('../models/screening.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllScreenings,addScreening,deleteScreening,getTodayScreenings} = require('../controllers/screeningController')

router.get('/',getAllScreenings)
router.post('/add',protect,addScreening)
router.delete('/delete',protect,deleteScreening)
router.get('/today',getTodayScreenings)

module.exports=router