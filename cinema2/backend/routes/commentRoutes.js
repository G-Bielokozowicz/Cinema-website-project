const router = require('express').Router()
let Comment = require('../models/comment.model')
const { protect } = require('../middleware/authMiddleware')

const {getCommentsByMovie,getCommentsByUser} = require('../controllers/commentController')


router.get('/movie/:movie', getCommentsByMovie)
router.get('/user/:user',getCommentsByUser)
//router.post('/add',protect,addMovie)

module.exports=router;