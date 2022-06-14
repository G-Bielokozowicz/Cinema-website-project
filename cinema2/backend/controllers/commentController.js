const router = require('express').Router()
let Comment= require('../models/comment.model')
const Ticket = require('../models/ticket.model')
const asyncHandler = require('express-async-handler')

const getCommentsByMovie = asyncHandler(async(req, res)=>{
    Comment.find({
        commentMovie: req.params['movie']
    })
    .populate([
        {
            path: 'commentUser'
        },
        {
            path: 'commentMovie'
        }
    ])
    .then(comments=>res.json(comments))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const getCommentsByUser = asyncHandler(async(req,res)=>{
    Comment.find({
        commentUser: req.user.id
    })
    .populate([
        {
            path: 'commentUser'
        },
        {
            path: 'commentMovie'
        }
    ])
    .then(comments=>res.json(comments))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const addComment = asyncHandler(async(req,res)=>{
    const ticket = Ticket.find({
        ticketUser: req.user.id,
      //  ticketMovie
    })
    .populate([
        {
            path: 'ticketUser'
        },
        {
            path: 'ticketScreeningID',
            populate: 'screeningMovie'
        }
    ])
    .then(tickets=>res.json(tickets))
    .catch(err=>res.status(400).json('Error: ' + err));
})

module.exports = {getCommentsByMovie,getCommentsByUser}