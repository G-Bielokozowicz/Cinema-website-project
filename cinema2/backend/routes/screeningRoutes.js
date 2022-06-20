const router = require('express').Router()
let Screening = require('../models/screening.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllScreenings,addScreening,deleteScreening,getTodayScreenings,getTakenSeats} = require('../controllers/screeningController')

router.get('/',getAllScreenings)
router.get('/:movie',getAllScreenings)
router.post('/add',protect,addScreening)
router.delete('/delete',protect,deleteScreening)
router.get('/today',getTodayScreenings)
router.get('/today/:movie',getTodayScreenings)
router.get('/seats/:screening',getTakenSeats)

module.exports=router