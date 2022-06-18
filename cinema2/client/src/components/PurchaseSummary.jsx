import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import axios from 'axios'
import QRCodee from './QRCode';

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

    const [src,setSrc] = useState("")
    
    useEffect(()=>{
        getTickets()
    },[])

    const ticketId = tickets[0] 

    return (
        <div>
            {tickets.map((ticket)=>{
             
            return (
                <Wrapper>
                    <TextStyle>
                        Purchase summary
                    </TextStyle>
                    
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
                   <ButtonRow>
                        <Button to = {'print'}>
                            Print ticket
                        </Button>
                    </ButtonRow>
                </Wrapper>
            )
          })}
        </div>
    )
}

const QRStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  //margin-bottom: 1%;
  margin-top: 1%;
`
//     return (
//         <Wrapper>
//             <TextStyle>
//                 Purchase summary
//             </TextStyle>
//             <ButtonRow>
//                 <Button to = {'print'}>
//                     Print ticket
//                 </Button>
//             </ButtonRow>
//         </Wrapper>
//     )
// }

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