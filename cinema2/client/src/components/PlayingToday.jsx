import React from 'react'
import MovieCardList from './MovieCardList'
import styled from 'styled-components'

function PlayingToday() {
  return (
    <div>
        <Wrapper>
            <Text>Dzisiaj grddfgamy</Text>
            <MovieCardList number={3}/>
        </Wrapper>
        
    </div>
  )
}

const Wrapper=styled.div`
    display: grid;
    margin-top: 2rem;
    
`

const Text=styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ee652e;
`

export default PlayingToday