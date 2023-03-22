import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Screenings(props) {

    // const movieId = props.id
    const dataBD = props.date
    const room = props.room
    const screeningID = props.screeningId
    const ticketPriceNormal = props.ticketNormal
    const ticketPriceReduced = props.ticketReduced
    
   // console.log("room w screenings: " + room)

    const formatTime = (time) => {
        var optionstime = {hour: 'numeric', minute: 'numeric'}
        return new Date(time).toLocaleTimeString([], optionstime)
    }

    const formatDate = (date) => {
        var optionsHour = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString([], optionsHour)
    }
    const time = formatTime(dataBD)
    const date = formatDate(dataBD)

    //sprawdzenie czy uzytkownik jest zalogowany
    const {user} = useSelector((state) => state.auth)
    let userType='user'
    if (user){
        let userToken = JSON.parse(localStorage.getItem('user')) 
        if (userToken){
        userType = userToken.type
        //  console.log("userEmail: " + userType)
        }
    
    }

    return (
        <Wrapper>
            <Info>
                <SetStyle>
                    <DateStyle>
                        {date}
                    </DateStyle>
                    <DateStyle>
                        {time}
                    </DateStyle>
                    <DateStyle>
                        <div>
                            Room nr: &nbsp;
                            {room}
                        </div> 
                    </DateStyle>
                </SetStyle>
                <SetStyle>
                    <DateStyle>
                        Normal Ticket: &nbsp;
                         {ticketPriceNormal}
                         &nbsp; zł
                    </DateStyle>
                    <DateStyle>
                        Reduced Ticket: &nbsp;
                        {ticketPriceReduced}
                        &nbsp; zł
                    </DateStyle>
                </SetStyle>
           
            <SetStyle>
            <ButtonRow>
                {user ? (<>
                    <Button to={'ticket'} state = {{temp: [props.movieId, screeningID, room, ticketPriceNormal, ticketPriceReduced, time, date]}}>
                        Buy ticket
                    </Button>
                </>) : (<>
                    <Button to={'/login'} >
                        Buy ticket
                    </Button>
                </>)}
            </ButtonRow>
            </SetStyle>
            </Info>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: gridbox;
   // margin: auto;
    justify-content: center;
    align-items: center;
    //width: 100%;
   //overflow: hidden;
    //position: relative;
    //border: 0;
    margin-top:5%;
    //margin-left:20%;
    //outline: red solid;
    background-color: black;
`

const SetStyle = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    //outline: pink solid;
`

const DateStyle = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
   // flex-wrap: wrap;
   // outline: blue solid;
    margin-left: 2%;
   // padding-left: 10px;
    width: 150%;
    //grid-template-rows:80px;
    //background-color: black;
`


const Info = styled.section`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 600;
    margin: 2px;
    margin-bottom: 20px;
    //outline: yellow solid;
`

const ButtonRow=styled.section`
    display: grid;
    justify-content: right; 
    align-items: center;
   // position: absolute;
   // bottom: 0;
   // right: 0;
    margin-bottom: 2%;
 //   margin-right: 1.5%;
  //  outline: pink solid;
`

const Button = styled(Link)`
    background-color: #d34d18;
  //  outline: grey solid;
   // position: right;
    color: #000;
    height: 50px;
    width: 150px; //szerokosc przycisku
    font-size: 20px;
    border-radius: 20px; //okragle rogi
    cursor: pointer;
    border: none;
    margin: 0 10px 0px 10px;
    //outline: red solid;
    transition: color 0.4s;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
    color: #ffffff;
    }
    margin-top: 1%;
`

export default Screenings