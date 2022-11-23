import React from 'react'
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import axios from 'axios'
import QRCodee from './QRCode';

function QRticket() {
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

    const [src,setSrc] = useState("")
    
    useEffect(()=>{
        getTickets()
    },[])

    return (
        <div>
            {tickets.map((ticket)=>{
             
            return (
                <div key={ticket._id}>
                <QRCodee qr={ticket.ticketQRCode}></QRCodee> 
                {ticket.ticketQRCode}
                <br></br></div>
                
            )
          })}
        </div>
    )
}

export default QRticket