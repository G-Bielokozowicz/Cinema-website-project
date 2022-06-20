import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GetScreeningsRep from './GetScreeningsRep'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function RepertuarCom() {

    //date picker
    const [date, setDate ] = useState('2022-06-22');
    const DatePicker = () => {
        console.log("Date " + date)
        return(
            <DatePickerStyle>
                <div className='main'>
                    <h4>Select a date</h4>
                    <input type = "date" onChange = { e => setDate(e.target.value)} />
                </div>
            </DatePickerStyle>
        )
    }
    const DatePickerStyle = styled.div`
        margin-top: 2%;
    `

   // console.log("Date za funkcją" + date)

    
    useEffect(()=>{
        console.log(date)
    },[date])


    //pobieranie filmów, ktore maja seans danego dnia 
    const [movies, setMovies] = useState([])

    const getMovies = async () =>{
        axios.get('http://localhost:5000/movies/date/' + date)
        .then((response) => {
        setMovies(response.data)
        console.log(response.data)
        })
        .catch((error)=>{
        console.log(error);
        })
    }
    
    useEffect(()=>{
        getMovies()
    },[date])


    return (
    
        <div>
            <HeaderStyle>
                Movie played in the {date}
            </HeaderStyle>
            <DateStyle>
                <DatePicker></DatePicker>   
                {date}
            </DateStyle>

            {movies.map((movie) => {
                return(
                    <div key = {movies._id}>
                        <RepertuarStyle>
                            <Image>
                                 <img src={movie.moviePosterURL} width={210} height={297} alt='Poster'/>
                            </Image>
                            <GetScreeningsRep id = {movie._id} selectedDate = {date} screeningDate = {movie.screeningDate}></GetScreeningsRep>
                        </RepertuarStyle>
                    </div>
                )
            })}
        </div>
  )
}

const RepertuarStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    outline: green solid;
    margin-bottom: 3%;
   // width: 87%;
`
const HeaderStyle = styled.div`
    text-align: center;
    margin-top: 2%;
    font-weight: bold;
    font-size: 20px;
    outline: white solid
`

const Image = styled.div`
    display: grid;
    /* align-items: center; */
    /* justify-content: center;  */
    outline: #2e1fcc solid;
`

const DateStyle = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
    outline: pink solid;
`

export default RepertuarCom