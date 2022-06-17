const router = require('express').Router()
let Movie = require('../models/movie.model')
const { protect } = require('../middleware/authMiddleware')

const {getAllMovies,getMovieByName, getMovieById, addMovie} = require('../controllers/movieController')


router.get('/', getAllMovies)
router.get('/name/:movie',getMovieByName)
router.get('/id/:movie',getMovieById)
router.post('/add',protect,addMovie)

module.exports=router;