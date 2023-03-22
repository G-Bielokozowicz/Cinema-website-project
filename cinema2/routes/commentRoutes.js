const router = require('express').Router()
let Comment = require('../models/comment.model')
const { protect } = require('../middleware/authMiddleware')

const {getCommentsByMovie, getCommentsByUser, addComment} = require('../controllers/commentController')


router.get('/movie/:movie', getCommentsByMovie)
router.get('/user',protect, getCommentsByUser)
router.post('/add',protect,addComment)

module.exports=router;