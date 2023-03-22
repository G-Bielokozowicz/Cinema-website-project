const router = require('express').Router()
let Screening = require('../models/screening.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllScreenings,addScreening,deleteScreening,getTodayScreenings,getTakenSeats,getScreeningsByDate} = require('../controllers/screeningController')

router.get('/',getAllScreenings)
router.get('/movie/:movie',getAllScreenings)
router.post('/add',protect,addScreening)
router.delete('/delete',protect,deleteScreening)
router.get('/today',getTodayScreenings)
router.get('/today/:movie',getTodayScreenings)
router.get('/seats/:screening',getTakenSeats)
router.get('/date/:date',getScreeningsByDate)
router.get('/date/:date/:movie',getScreeningsByDate)


module.exports=router