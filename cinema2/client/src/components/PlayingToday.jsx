import React from 'react'
import PlayingTodayList from './PlayingTodayList'
import styled from 'styled-components'

function PlayingToday() {
  return (
    <div>
        <Wrapper>
            <Text>We play today</Text>
            <PlayingTodayList />
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