import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import axios from 'axios'
import QRCodee from './QRCode';
import { useLocation } from 'react-router-dom'

function PurchaseSummary() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWM0ZmRlYmViNmZjZjkxYzQzMTc3MCIsImlhdCI6MTY1NTU2Njk0NCwiZXhwIjoxNjU4MTU4OTQ0fQ.eRNssIhWVg3b9dmoZ40V17NWJd_-xO-Ot2jzS8LU8rc"
    const config = {
        headers: { Authorization: `Bearer ${token}` }
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

    // const [src,setSrc] = useState("")
    
    useEffect(()=>{
        getTickets()
    },[])

    // const ticketId = tickets[0] 

    //pobieranie danych z Ticket
    //props._id, props.ticketType, props.ticketSeats]
    const location = useLocation()

    const ticketID = location.state.temp[0]
    const ticketType = location.state.temp[1]
    const ticketSeats = location.state.temp[2]
    const qrCode = location.state.temp[3]

    console.log("qr:" +  qrCode)

    // console.log("ticketID:" +  ticketID)
    // console.log("ticketType:" +  ticketType)
    // console.log("ticketSeats:" +  ticketSeats)

    return (
   
        <Wrapper>
            <TextStyle>
                Purchase summary
            </TextStyle>
            
            <div>
            <QRCodee qr={qrCode}></QRCodee> 
            </div>
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
  //margin-bottom: 1%;
  margin-top: 1%;
`

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
`

const TextStyle=styled.section`
    /* display: grid; */
    margin-top: 20%;
    outline: #24a763; 
`

const ButtonRow=styled.section`
    /* display: grid; */
    margin-top: 20%;
    //outline: #24a763
`

const Button = styled(Link)`
    background-color: #d34d18;
    color: #000;
    height: 50px;
    width: 150px; //szerokosc przycisku
    font-size: 20px;
    border-radius: 20px; //okragle rogi
    border: none;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    &:focus {
    color: #ffffff;
    }
`
export default PurchaseSummary