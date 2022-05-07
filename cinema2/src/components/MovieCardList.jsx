import React from 'react'
import MovieCard from './MovieCard'
import styled from 'styled-components'

function MovieCardList() {
  return (
    <div>
        <MovieList>
          <ListItem>
            <MovieCard />
          </ListItem>
          <ListItem>
            <MovieCard />
          </ListItem>
          <ListItem>
            <MovieCard />
          </ListItem>
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
