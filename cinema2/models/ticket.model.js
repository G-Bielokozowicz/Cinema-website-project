const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const ticketSchema = new Schema({
    ticketScreeningID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Screening',
    },
    ticketType:{
        type: String,
        required: true,
    },
    ticketSeats: {
        type: [Number],
        required: true,
    },
    ticketUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    ticketQRCode:{
        type:String,
        required:true,
        unique:true,
    }

})

const Ticket = mongoose.model('Ticket',ticketSchema)
module.exports = Ticket