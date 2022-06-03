const router = require('express').Router()
let Ticket = require('../models/ticket.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllTickets, addTicket} = require('../controllers/ticketController')

router.get('/', getAllTickets)
router.post('/add',protect,addTicket)

module.exports=router;