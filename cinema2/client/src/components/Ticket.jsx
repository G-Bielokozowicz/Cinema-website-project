import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import { useParams} from 'react-router-dom'

//TODO zrobić ui żeby było ładniej

function Ticket() {
    const location = useLocation()
    const { time } = location.state
    const [seatNumber, setSeatNumber]=useState(1);
    const params = useParams()
    const name = params.name.charAt(0).toUpperCase() + params.name.slice(1)
    function handleSetSeatNumber(id){
        setSeatNumber(id)
    }

    let seats=[]
    for (let i = 1; i <= 100; i++) {
        seats.push(<Square key={i} onClick={() => handleSetSeatNumber(i)}>
            {i}
        </Square>);
      }
    return (
        <Wrapper>
            You are buying ticket for {name} at {time}
            <br></br>
            Chosen seat is {seatNumber} 
            <Screen>
                Screen
            </Screen>
            <CinemaHall>
                {seats}
            </CinemaHall>
        </Wrapper>
    )
}


const Wrapper=styled.div`
    display:grid;
    justify-content: center;
    margin-top: 25px;
`

const Screen=styled.div`
    display: flex;
    margin-top: 50px;
    min-width: 1100px;
    height: 30px;
    font-weight: 5rem;
    background-color: #eeeded;
    color: black;
    justify-content: center;
    font-size: 1.05rem;
    font-weight: 600;
`

const CinemaHall=styled.div`
    margin-top: 12%;
    display: flex;
    flex-wrap: wrap; 
    height: 250px;
    width: 1100px;
    align-content: flex-start;
    
`

const Square=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: 5px;
    min-height: 50px;
    min-width: 50px;
    border: none;
    background-color: #eeeded;
    outline: double 1px;
    flex-basis: 2%;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        background-color: #D34D18;
        color: white;
    }
    
`

export default Ticket