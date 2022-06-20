import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import QRCodee from './QRCode';
import QRCode from 'qrcode';

function UserAccount() {

    const userEmail = JSON.parse(localStorage.getItem('user')) 
    const user = userEmail.email

    const token = JSON.parse(localStorage.getItem('user'))
   //  console.log("token: " + token.token)
    
    const config = {
        headers: { Authorization: `Bearer ${token.token}` }
    };      
    const [tickets, setTickets] = useState([])

    const getTickets = async () =>{
        axios.get('http://localhost:5000/tickets/', config)
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

    //time and date
    const formatTime = (time) => {
        var optionstime = {hour: 'numeric', minute: 'numeric'}
        return new Date(time).toLocaleTimeString([], optionstime)
    }

    const formatDate = (date) => {
        var optionsHour = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString([], optionsHour)
    }

    //qrCode
    function QRCodePom(props) {

        const [src,setSrc] = useState("")
    
        QRCode.toDataURL(props.qr).then(setSrc)
    
        return (
            <div><img src={src} height = {100}/></div>
        )
    }


  return (
    <div>
        <HeaderStyle>
            Hi {user}! It's your tickets:
        </HeaderStyle>
        {tickets.map((ticket) => {
                return(
                    <OneTicket>
                        <div key = {ticket._id}>
                            
                            {/* {ticket.ticketUser.userName} */}
                            <TextStyle>
                                <TitleStyle>
                                    {ticket.ticketScreeningID.screeningMovie.movieName}
                                </TitleStyle>
                                <ImportantStyle>
                                    {formatDate(ticket.ticketScreeningID.screeningDate)}
                                    , &nbsp;
                                    {formatTime(ticket.ticketScreeningID.screeningDate)}
                                </ImportantStyle>
                                <InfoStyle>
                                    {ticket.ticketType}
                                </InfoStyle>
                                <InfoStyle>
                                    room number: &nbsp;
                                    {ticket.ticketScreeningID.screeningRoom}
                                </InfoStyle>
                                <ImportantStyle>
                                    seats: &nbsp;
                                    {ticket.ticketSeats}
                                </ImportantStyle>
                            </TextStyle>
                            <QRCodee qr={ticket.ticketQRCode} ></QRCodee> 
                            <TextStyle>
                                {ticket.ticketQRCode}
                            </TextStyle>
                        </div>
                    </OneTicket>
                )
            })}

    </div>
  )
}

const HeaderStyle = styled.div`
    font-weight: bold;
    margin-top: 2%;
    margin-bottom: 1%;
    display: grid;
    align-items: center;
    justify-content: center;
`

const TitleStyle = styled.div`
    font-weight: bold;
    font-size: 19px;
    text-align: center;
`
const InfoStyle = styled.div`
text-align: center;
    
`
const TextStyle = styled.div`
    margin-bottom: 1%;
   // width: 23%;
    display: grid;
    align-items: center;
    justify-content: center;
    position: relative;
   // outline: green solid;
`
const ImportantStyle = styled.div`
    font-weight: bold;
    text-align: center;
`

const OneTicket = styled.div`
    margin-bottom: 1%;
    margin-top: 1%;
   // margin-left: 10%;
    display: grid;
    align-items: center;
    justify-content: center;
    /* border-bottom: 1px;
    border-color: #424242;
    border-style: solid;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px; */
    
`

export default UserAccount