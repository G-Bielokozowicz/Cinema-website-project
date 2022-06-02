const router = require('express').Router()
let Movie = require('../models/movie.model')

const {getAllMovies, addMovie} = require('../controllers/movieController')


router.get('/',getAllMovies)
router.post('/add',addMovie)

module.exports=router;