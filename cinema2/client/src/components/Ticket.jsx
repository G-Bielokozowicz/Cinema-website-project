import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'
import QRCodee from './QRCode';
import { useNavigate } from "react-router-dom"

//TODO zrobić ui żeby było ładniej

function Ticket(props) {

    const navigate = useNavigate()
   
    //pozyskiwanie dancyh

    const location = useLocation()

    const movieId = location.state.temp[0]
    const ticketScreeningID = location.state.temp[1]
    const room = location.state.temp[2]
    const ticketPriceNormal = location.state.temp[3]
    const ticketPriceReduced = location.state.temp[4]
    const time = location.state.temp[5]
    const date = location.state.temp[6]
   
  //generowanie siedzonek 
    const [seatNumber, setSeatNumber]=useState(1);
    const params = useParams()
    const name = params.name.charAt(0).toUpperCase() + params.name.slice(1)
    
    function handleSetSeatNumber(id){
        setSeatNumber(id)
    }

    let seats=[]
    for (let i = 1; i <= 100; i++) {
        seats.push(<Square key={i} type = 'button' onClick={() => handleSetSeatNumber(i)}>
            {i}
        </Square>);
      }

    const ticketSeats = seatNumber
   

    //Typ biletu - radio buttons

    const [selectedTicketType, setSelectedTicketType] = useState('')

    const onClickRadioButton = (e) => {
        e.preventDefault()
        setSelectedTicketType(e.target.value)
       // console.log("selectedTicketType: "+ selectedTicketType);
    }
    const ticketType = 'normal'
    console.log("ticketType: ", ticketType)
      
    
    //przechwytywanie kodu qr
    const [serverTicket, setServerTicket] = useState([])

    //umieszczanie biletu w bazie 
    const token = JSON.parse(localStorage.getItem('user')) ///kto tu ma byc?
    const config = {
        headers: { Authorization: `Bearer ${token.token}` }
    };      

    const [added, setAdded] = useState(false)
    
    const onSubmit = (e) => {
        console.log("Nacisnieto button buy")
        e.preventDefault()
        
        const data = {ticketScreeningID, ticketType, ticketSeats} //nazwy takie jak w bazie
         
        axios.post('http://localhost:5000/tickets/add', data, config)
        .then((response) => {
        console.log("New ticket added")
        setServerTicket(response.data)
        setAdded(true)
        console.log(response.data)
            // navigate('summary', {id: props._id, ticketType: selectedTicketType, ticketSeats: ticketSeats, 
                // qrCode: serverTicket.qrCode, room: room, time: time, date: date, name: name })

         })
        .catch((error)=>{
        console.log(error);
        })
    }


    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
            You are buying ticket for {name} at {time}
            <br></br>
            {serverTicket.ticketQRCode}
            <Screen>
                Screen
            </Screen>
            <CinemaHall>
                {seats}
            </CinemaHall>
            Chosen seat is {seatNumber}
            <RadioStyle >
                <div>
                    <input
                        type = "radio"
                        value = "normal"
                        name = "ticket" 
                        checked="checked"
                        onChange={onClickRadioButton}   
                    />
                    normal ticket
                </div>
                <div>
                    <input
                        type = "radio"
                        value = "reduced"
                        name = "ticket"
                        onChange={onClickRadioButton}   
                    />
                    reduced ticket
                </div>
            </RadioStyle>
            Chosen {selectedTicketType} ticket
                {!added && < ButtonFirst type = 'submit'>
                    Buy
                </ButtonFirst>
                }
                {added && < Button to = {'summary'} type = 'button' state = {{ temp: [selectedTicketType, ticketSeats, serverTicket.qrCode, room, time, date, name]}}>
                    Summary
                </Button>
                }
            </form>
        </Wrapper>
    )
}

const Button=styled(Link)`
   // position: right;
    display: grid;
    justify-content: center;
    align-items: center;

    background-color: #d34d18;
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    margin-top:4%;
    margin: auto;
    ///cursor: pointer;
    //border: none;
   // position: relative;
    //left: 40%;
   // outline: green solid;
   // transition: color 0.4s;
    text-decoration: none;
    &:hover {
    color: #ffffff;
    }
`
const ButtonFirst=styled.button`
   // position: right;
    display: grid;
    justify-content: center;
    align-items: center;

    background-color: #d34d18;
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    margin-top:4%;
    margin: auto;
    ///cursor: pointer;
    //border: none;
   // position: relative;
    //left: 40%;
   // outline: green solid;
   // transition: color 0.4s;
    text-decoration: none;
    &:hover {
    color: #ffffff;
    }
`
const RadioStyle=styled.div`
    display:grid;
    justify-content: center;
    align-items: center;
    //margin-top: 25px;
    // outline: red solid;
`

const Wrapper=styled.div`
    display:grid;
    justify-content: center;
    align-items: center;
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