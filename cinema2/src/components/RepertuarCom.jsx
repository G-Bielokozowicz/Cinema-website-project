import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GetScreeningsRep from './GetScreeningsRep'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {FaArrowCircleLeft} from 'react-icons/fa'


function RepertuarCom() {

    //date picker
    const [date, setDate ] = useState('2022-06-22');
    const DatePicker = () => {
       // console.log("Date " + date)
        return(
            <DatePickerStyle>
                <div className='main'>
                    <h4>Select a date</h4>
                    <WindowStyle  type = "date" onChange = { e => setDate(e.target.value)} >
                        {/* <FaArrowCircleLeft /> */}
                    </WindowStyle>
                </div>
            </DatePickerStyle>
        )
    }
    
    useEffect(()=>{
        //console.log(date)
    },[date])


    //pobieranie filmów, ktore maja seans danego dnia 
    const [movies, setMovies] = useState([])

    const getMovies = async () =>{
        //axios.get('http://localhost:5000/movies/date/' + date)
        axios.get('https://swbocinemaapi.onrender.com/movies/date/' + date)
        .then((response) => {
        setMovies(response.data)
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
                Movies played on the: {date}
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

const DatePickerStyle = styled.div`
    margin-top: 2%;
`
const WindowStyle = styled.input`
    background-color: #777777;
    /* background-color: #d34d18; */
    font-size: large;
    border-radius: 5px;
   // border: none; 
    height: 30px;
`

const RepertuarStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
 //   outline: green solid;
    margin-bottom: 3%;
  //  width: 85%;
`
const HeaderStyle = styled.div`
    text-align: center;
    margin-top: 2%;
    font-weight: bold;
    font-size: 20px;
  //  outline: orange solid
`

const Image = styled.div`
    display: grid;
  //  outline: #2e1fcc solid;
`

const DateStyle = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 3%;
  //  outline: pink solid;
`

export default RepertuarCom