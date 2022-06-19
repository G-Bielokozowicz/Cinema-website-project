import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import axios from 'axios'
import QRCodee from './QRCode';
import { useLocation } from 'react-router-dom'

function PurchaseSummary() {

    const token = JSON.parse(localStorage.getItem('user'))
     console.log("token: " + token.token)
      
    const config = {
        headers: { Authorization: `Bearer ${token.token}` }
    };      
    const [tickets, setTickets] = useState([])

    const getTickets = async () =>{
        axios.get('http://localhost:5000/tickets/',config)
        .then((response) => {
          setTickets(response.data)
          console.log(tickets.size)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    
    useEffect(()=>{
        getTickets()
    },[])

    //pobieranie danych z Ticket
    const location = useLocation()

    const ticketID = location.state.temp[0]
    const ticketType = location.state.temp[1]
    const ticketSeats = location.state.temp[2]
    const qrCode = location.state.temp[3]
    const room = location.state.temp[4]
    const time = location.state.temp[5]
    const date = location.state.temp[6]
    const name = location.state.temp[7]

    console.log("name w summary:" +  name)

    return (
        <Wrapper>
            <TextStyle>
                Purchase summary
            </TextStyle>
            <InfoStyle>
                You are buying {ticketType} ticket for {name} at {time}
            </InfoStyle>
            <InfoStyle>
                Your seat number: {ticketSeats}
            </InfoStyle>
            <InfoStyle>
                Room number: {room}
            </InfoStyle>
            <QRStyle>
                <QRCodee qr={qrCode}></QRCodee> 
            </QRStyle>
            <ButtonRow>
                <Button to = {'print'}>
                    Print ticket
                </Button>
            </ButtonRow>
        </Wrapper>

    )
}

const QRStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  //margin-bottom: 1%;
`

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    outline: yellow;
`

const TextStyle=styled.section`
    display: grid;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10%;
    margin-bottom: 10%;
    outline: #24a703; 
`

const InfoStyle=styled.section`
    display: grid;
    align-items: center;
    justify-content: center;
`

const ButtonRow=styled.section`
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    //outline: #24a763
`

const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d34d18;
    color: #000;
    outline: #b4c4bc;
    height: 50px;
    width: 150px; //szerokosc przycisku
    font-size: 20px;
    border-radius: 20px; //okragle rogi
    border: none;
    text-decoration: none;
    &:hover {
    color: #ffffff;
    }
`
export default PurchaseSummary