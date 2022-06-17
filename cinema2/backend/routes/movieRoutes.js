const router = require('express').Router()
let Movie = require('../models/movie.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllMovies,getMovieByName, addMovie} = require('../controllers/movieController')


router.get('/', getAllMovies)
router.get('/name/:movie',getMovieByName)
router.post('/add',protect,addMovie)

module.exports=router;