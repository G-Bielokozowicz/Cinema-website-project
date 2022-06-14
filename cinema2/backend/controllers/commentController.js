const router = require('express').Router()
let Comment= require('../models/comment.model')
const Ticket = require('../models/ticket.model')
const asyncHandler = require('express-async-handler')
const Screening = require('../models/screening.model')

const getCommentsByMovie = asyncHandler(async(req, res)=>{
    Comment.find({
        commentMovie: req.params['movie']
    })
    .populate([
        {
            path: 'commentUser',
            select: '-userPassword'
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
            path: 'commentUser',
            select: '-userPassword'
        },
        {
            path: 'commentMovie'
        }
    ])
    .then(comments=>res.json(comments))
    .catch(err=>res.status(400).json('Error: ' + err));
})

const addComment = asyncHandler(async(req,res)=>{

    const movie = req.body.commentMovie
    const commentBody = req.body.commentBody
    const user = req.user.id

    // Get user tickets
    const tickets = await Ticket.find({
        ticketUser: req.user.id
    })
   
    // Get screenings ids from those tickets
    var screeningids = tickets.map(function(ticket){
        return ticket.ticketScreeningID
    })

    // Find all screenings with movie the user wants to comment on
    const screenings = await Screening.find({
        _id:{'$in':screeningids},
        screeningMovie: movie
    })

    // If user did not see the movie, don't allow him to comment
    if (screenings.length<=0){
        res.status(400).json({"Message":"You haven't seen this movie yet, so you cannot comment"})
        throw new Error()
    }

    // If he did see the movie, allow him to comment
    else{
       const newComment = new Comment({
            commentUser:user,
            commentMovie:movie,
            commentBody
       })
       newComment.save()
       .then(()=>res.status(200).json({
        user: user,
        comment: commentBody,
        movie: movie
       }))
    }
    
})

module.exports = {getCommentsByMovie,getCommentsByUser,addComment}