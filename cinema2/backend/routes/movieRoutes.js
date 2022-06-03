const router = require('express').Router()
let Movie = require('../models/movie.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllMovies, addMovie} = require('../controllers/movieController')


router.get('/', getAllMovies)
router.post('/add',protect,addMovie)

module.exports=router;