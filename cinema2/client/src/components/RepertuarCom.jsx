import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GetScreeningsRep from './GetScreeningsRep'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


function RepertuarCom() {

    //pobieranie wszystkich filmów z bazy
    const [movies, setMovies] = useState([])

    const getMovies = async () =>{
      axios.get('http://localhost:5000/movies/')
      .then((response) => {
        setMovies(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
   
    useEffect(()=>{
        getMovies()
    },[])

    //date picker
    const [date, setDate ] = useState('2022-06-20');
    const DatePicker = () => {
        console.log("Date " + date)
        return(
            <div className='main'>
                <h4>Selected Date: {date} </h4>
                <input type = "date" onChange = { e => setDate(e.target.value)} />
            </div>
        )
    }

    console.log("Date za funkcją" + date)

    
    useEffect(()=>{
        console.log(date)
    },[date])


    return (
    
        <MovieStyle>
            <DateStyle>
                <DatePicker></DatePicker>   
                {date}
            </DateStyle>

            {movies.map((movie) => {
                return(
                    <div key = {movies._id}>
                        <RepertuarStyle>
                            <GetScreeningsRep id = {movie._id} selectedDate = {date}></GetScreeningsRep>
                            <div>
                                {movie.movieName}
                            </div>
                            <div>
                                <img src={movie.moviePosterURL} width={210} height={297} alt='Poster'/>
                            </div>
                            <div>
                                {movie.movieLength}
                            </div>
                            <div>
                                {movie.screeningDate} 
                            </div>
                            <div>
                                ID:
                                {movie._id}
                            </div>
                        </RepertuarStyle>
                    </div>
                )
            })}
        </MovieStyle>
  )
}

const RepertuarStyle = styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: center;  */
    outline: green;
`
const MovieStyle = styled.div`
    display: grid;
    /* align-items: center; */
    /* justify-content: center;  */
    outline: red solid;
`

const DateStyle = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
`

const ButtonStyle = styled.div`
    background-color: #d34d18;
   // position: right;
    color: #000;
    height: 30px;
    width: 50px; //szerokosc przycisku
    font-size: 50px;
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


export default RepertuarCom