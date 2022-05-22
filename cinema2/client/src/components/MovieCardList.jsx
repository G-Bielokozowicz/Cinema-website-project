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
            
            {/* {(() => {
              let test = [];
                for (let i = 0; i < props.number; i++) {
                      test.push(<ListItem key={i}>
                                  <MovieCard name={'test'}/>
                                </ListItem>);
                    }
                    return test;
            })()} */}
          {movies.map((movie)=>{
            return (
              <ListItem key={movie._id}>
                <MovieCard name={movie.movieName}/>
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
  max-width:40%;
`

const ListItem = styled.li`
  display:inline-block;
  margin-top:15px;
`


export default MovieCardList
