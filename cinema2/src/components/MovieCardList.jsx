import React from 'react'
import MovieCard from './MovieCard'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'


function MovieCardList(props) {

    const [movies, setMovies] = useState([])

    const getMovies = async () =>{
      axios.get('http://localhost:5000/movies/')
      .then((response) => {
        setMovies(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
   
    useEffect(()=>{
      getMovies()
    },[])


    return (
      <div>
          <MovieList>
          {movies.map((movie)=>{
            return (
              <ListItem key={movie._id}>
                <MovieCard id = {movie._id} name={movie.movieName} description={movie.movieDescription} image={movie.moviePosterURL} 
                          director={movie.movieDirector} length = {movie.movieLength} year = {movie.movieReleaseYear}/>
              </ListItem>
            )
          })}
          </MovieList>
      
      </div>
    )
}

const MovieList = styled.ul`
  display:flex;
  flex-direction: column;
  margin:auto;
  max-width:60%;
`

const ListItem = styled.li`
  display:inline-block;
  margin-top:15px;
`


export default MovieCardList
