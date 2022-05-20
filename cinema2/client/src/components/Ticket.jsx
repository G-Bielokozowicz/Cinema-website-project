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
        <div>
            You are buying ticket for {name} at {time}
            <br></br>
            Chosen seat is {seatNumber} 
            <CinemaHall>
                {seats}
            </CinemaHall>
            
        </div>
    )
}

const Wrapper=styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`

const CinemaHall=styled.div`
    display: flex;
    flex-wrap: wrap; 
    height: 250px;
    width: 600px;
    align-content: flex-start;
    
`

const Square=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: 5px;
    min-height: 25px;
    min-width: 25px;
    border: none;
    background-color: white;
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