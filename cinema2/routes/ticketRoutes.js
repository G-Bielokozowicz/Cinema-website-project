const router = require('express').Router()
let Ticket = require('../models/ticket.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllTickets,getTicketByID, addTicket} = require('../controllers/ticketController')

router.get('/', protect,getAllTickets)
router.get('/id/:ticketid', protect,getTicketByID)
router.post('/add',protect,addTicket)

module.exports=router;