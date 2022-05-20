import React from 'react'
import MovieCard from './MovieCard'
import styled from 'styled-components'


function MovieCardList(props) {
  return (
    <div>
        <MovieList>
          {(() => {
            let test = [];
              for (let i = 0; i < props.number; i++) {
                    test.push(<ListItem>
                                <MovieCard />
                              </ListItem>);
                  }
                  return test;
          })()}
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
