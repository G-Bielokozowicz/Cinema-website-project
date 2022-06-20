import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import RepertuarScreenings from './RepertuarScreenings'

function GetScreeningsRep(props) {

    let movieId = props.id
    let selectedDate = props.selectedDate
    let screeningDate = props.screeningDate

    console.log("screeningDate w Get: " + screeningDate)

    //pobieranie senasów z bazy
    const [screenings, setScreenings] = useState([])

    const getScreenings = async () =>{
        axios.get('http://localhost:5000/screenings/date/' + selectedDate +"/"+movieId)
        .then((response) => {
          setScreenings(response.data)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
   
    useEffect(()=>{
        getScreenings()
    },[selectedDate])

    
    const formatTime = (time) => {
        var optionstime = {hour: 'numeric', minute: 'numeric'}
        return new Date(time).toLocaleTimeString([], optionstime)
    }

    const formatDate = (date) => {
        var optionsHour = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString([], optionsHour)
    }


    // const time = formatTime(dataBD)
    // const date = formatDate(dataBD)

   
    return (
        <div>
            {screenings.map((screen) => {
                return (
                    <InfoStyle>
                        <div key={screen._id}>
                            <NameStyle>
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
                                &nbsp;
                            </LengthStyle>
                        <div>
                        {/* <img src={screen.screeningMovie.moviePosterURL} width={210} height={297} alt='Poster'/> */}
                        </div>
                        
                        </div>
                    </InfoStyle>
                )
            })}  
        </div>
    )
}

const NameStyle = styled.div`
    font-weight: bold;
`
const LengthStyle = styled.div`
    color: #7f7f7f;
`

const InfoStyle = styled.div`
    /* display: grid;
    align-items: center;
    justify-content: center; */
    margin-top: 10%;
    margin-left: 10%;
    width: 200%;
    outline: green solid;
`

const ScreeningsStyle = styled.div`
    /* display: grid;
    align-items: center;
    justify-content: center; */
`


export default GetScreeningsRep