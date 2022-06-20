import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'

//TODO zrobić ui żeby było ładniej

function Ticket(props) {
   
    //pozyskiwanie dancyh
    
    // const params = useParams()
    const location = useLocation()

    const movieId = location.state.temp[0]
    const screeningID = location.state.temp[1]

    console.log("TicketScreeningId: " + screeningID)

    //umieszczanie biletu w bazie 
    const API_URL = 'http://localhost:5000/tickets/add'
    
 
    const [tickets, setTickets] = useState([])

    const ticket = {
        ticketScreeningID: screeningID,
        ticektPrice: 150,
        ticektType: "normal",
        ticektSeats: Array
    }
    

    const postTickets = async () =>{
        axios.post(API_URL, ticket)
        .then((response) => {
            setTickets(response.data)
            console.log(tickets.size)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    
    useEffect(()=>{
        postTickets()
    },[])

   
   
  //generowanie siedzonek 
    // const location = useLocation()
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
            <Screen>
                Screen
            </Screen>
            <CinemaHall>
                {seats}
            </CinemaHall>
            Chosen seat is {seatNumber}
            <Button to={'summary'} state = {{text: 'Buy'}}>
                Buy
            </Button>
        </Wrapper>
    )
}

const Button=styled(Link)`
    background-color: #d34d18;
    position: right;
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    margin-top:4%;
    cursor: pointer;
    border: none;
    position: relative;
    left: 40%;
    //outline: red solid;
    transition: color 0.4s;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
    color: #ffffff;
    }
`

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
    margin-top: 10%;
    margin-bottom: 2%;
    display: flex;
    flex-wrap: wrap; 
    height: auto;
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
    &:focus{
        background-color: #D34D18;
        color: white;
    }
   
`

export default Ticket