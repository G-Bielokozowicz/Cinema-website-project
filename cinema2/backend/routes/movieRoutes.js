const router = require('express').Router()
let Movie = require('../models/movie.model')

const {getAllMovies, addMovie} = require('../controllers/movieController')


// // Get all movies
// router.route('/').get((req,res)=>{
//     Movie.find()
//     .then(movies=>res.json(movies))
//     .catch(err=>res.status(400).json('Error: ' + err));
// })

router.get('/',getAllMovies)
router.post('/add',addMovie)

// // Add a movie
// router.route('/add').post((req,res)=>{
//     const movieName = req.body.movieName
//     const movieDirector = req.body.movieDirector
//     const movieLength = Number(req.body.movieLength)
//     const movieDescription = req.body.movieDescription
//     const movieReleaseYear = Number(req.body.movieReleaseYear)
//     const moviePosterURL = req.body.moviePosterURL


//     const newMovie = new Movie({
//         movieName,
//         movieDirector,
//         movieLength,
//         movieDescription,
//         movieReleaseYear,
//         moviePosterURL,
//     });

//     newMovie.save()
//     .then(() => res.json('Movie added'))
//     .catch(err => res.status(400).json('Error: ' + err));
// })

module.exports=router;