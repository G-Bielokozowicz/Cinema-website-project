const router = require('express').Router()
let Ticket = require('../models/ticket.model')
const asyncHandler = require('express-async-handler')

const getAllTickets = asyncHandler(async(req,res)=>{
    Ticket.find()
    .populate('screeningMovie')
    .then(screenings=>res.json(screenings))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const addTicket = asyncHandler(async(req,res)=>{
    res.json('add ticket')
})

module.exports = {getAllTickets,addTicket}