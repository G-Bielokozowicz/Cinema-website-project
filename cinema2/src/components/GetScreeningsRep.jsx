import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function GetScreeningsRep(props) {

    let movieId = props.id
    let selectedDate = props.selectedDate
    let screeningDate = props.screeningDate

   // console.log("screeningDate w Get: " + screeningDate)

    //pobieranie senasów z bazy
    const [screenings, setScreenings] = useState([])

    const getScreenings = async () =>{
        //axios.get('http://localhost:5000/screenings/date/' + selectedDate +"/"+movieId)
        axios.get('https://swbocinemaapi.onrender.com/screenings/date/' + selectedDate +"/"+movieId)
        .then((response) => {
          setScreenings(response.data)
          //console.log(response.data)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
   
    useEffect(()=>{
        getScreenings()
    },[selectedDate,movieId])

    //formatiowanie daty i godziny
    const formatTime = (time) => {
        var optionstime = {hour: 'numeric', minute: 'numeric'}
        return new Date(time).toLocaleTimeString([], optionstime)
    }

    const formatDate = (date) => {
        var optionsHour = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString([], optionsHour)
    }

    //sprawdzenie czy uzytkownik jest alogowany, żeby mógł kupic bilet
    const {user} = useSelector((state) => state.auth)
    let userType='user'
    if (user){
        let userToken = JSON.parse(localStorage.getItem('user')) 
        if (userToken){
            userType = userToken.type
            console.log("userEmail: " + userType)
        }    
    }

    return (
        <div>
            <InfoStyle>
            {screenings.map((screen) => {
                return (
                        <div key={screen._id}>
                            <ScreeningStyle>
                            <TextStyle>
                                <NameStyle to={`/movie/${screen.screeningMovie.movieName}`}
                                            state = {{temp: [screen.screeningMovie._id, screen.screeningMovie.movieDescription,
                                                screen.screeningMovie.movieDirector, screen.screeningMovie.moviePosterURL,screen.screeningMovie.movieLength,screen.screeningMovie.movieReleaseYear]}}>
                                    {screen.screeningMovie.movieName}
                                </NameStyle>
                                <div>
                                    Date: &nbsp;
                                    {formatDate(screen.screeningDate)}
                                </div>
                                <div>
                                    Time: &nbsp;
                                    {formatTime(screen.screeningDate)}
                                </div>
                                <LengthStyle>
                                    Movie Length: &nbsp;
                                    {screen.screeningMovie.movieLength}
                                    &nbsp; min
                                </LengthStyle>
                            </TextStyle>
                            {user ? (<>
                                <ButtonStyle to={`/movie/${screen.screeningMovie.movieName}/ticket`} 
                                        state = {{temp: [screen.screeningMovie._id, screen._id,
                                            screen.screeningRoom, screen.screeningPriceNormal, screen.screeningPriceReduced,
                                            formatTime(screen.screeningDate), formatDate(screen.screeningDate)]}} >
                                            Buy Ticket
                                </ButtonStyle>
                            </>) : (<>
                                <ButtonStyle to={`/login`} >
                                    Buy Ticket
                                </ButtonStyle>
                            </>)}
                            </ScreeningStyle>
                        
                    </div>
                )
            })}  
            </InfoStyle>
        </div>
    )
}

const NameStyle = styled(Link)`
    font-weight: bold;
    color: white;
    &:hover{
        color: grey;
    }
`
const LengthStyle = styled.div`
    color: #7f7f7f;
`
const ScreeningStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
  //  outline: purple solid;
`

const TextStyle = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center;
    margin-left: 1%;
   // margin-right: 10%;
    width: 300px;
  //  outline: red solid;
`

const InfoStyle = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center;

   // margin-top: 8%;
    margin-left: 10%; 
    width: 500px; 
    height: 297px;
    background-color: black;
  //  outline: yellow solid;
`

const ButtonStyle=styled(Link)`
    position: right;
    display: flex;
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


export default GetScreeningsRep