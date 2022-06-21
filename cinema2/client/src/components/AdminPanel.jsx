import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'


function AdminPanel() {

    //dodwanie seansów  do bazy
    const [movieName, setMovieName] = useState('')
    const [room, setRoom] = useState('')
    let [date, setDate] = useState('2022-06-22')
    let [time, setTime] = useState('12:00:00')
    const [priceNormal, setPriceNormal] = useState('')
    const [priceReduced, setPriceReduced] = useState('')

    let dateTime = `${date}T${time}Z`

    console.log("dateTime: ", dateTime)

    //pobieraniee wszytskich filmw
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


    //umieszczanie seansu w bazie
    const token = JSON.parse(localStorage.getItem('user'))
    //  console.log("token: " + token.token)
      
    const config = {
        headers: { Authorization: `Bearer ${token.token}` }
    };

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {screeningMovie:movieName, screeningRoom:room, screeningDate:dateTime, screeningPriceNormal:priceNormal, 
            screeningPriceReduced: priceReduced}

        axios.post('http://localhost:5000/screenings/add', data, config)
        .then(() => {
            console.log("New screening added")
        })
        .catch((error)=>{
        console.log(error);
        })
    }

  return (
    <AddSreeningStyle>
        Add the screening values &nbsp;
        {movieName}
        {movieName._id}

        <MovieList>
            <select onChange={(e) => setMovieName(e.target.value)}>
                {movies.map((movie)=>{
                    return (
                        <option defaultValue={movie._id} >
                            {movie.movieName} &nbsp; {movie._id}
                        </option>
                    )
                })}
            </select>
        </MovieList>

        <InputStyle
            type='number'
            name='room'
            id='room'
            value={room}
            placeholder = 'Enter screening room' 
            size="100"
            min='0'
            //height="30"
            onChange={(e) => setRoom(e.target.value)}
            >
        </InputStyle> 
        <InputStyle
            type='date'
            name='date'
            id='date'
            value={date}
            placeholder = 'Enter screening date' 
            size="100"
            //height="30"
            onChange={(e) => setDate(e.target.value)}
            >
        </InputStyle> 
        <InputStyle
            type='time'
            name='time'
            id='time'
            value={time}
            step = '2'
            placeholder = 'Enter screening date' 
            size="100"
            //height="30"
            onChange={(e) => setTime(e.target.value)}
            >
        </InputStyle> 
        <InputStyle
            type='number'
            name='priceNormal'
            id='priceNormal'
            value={priceNormal}
            placeholder = 'Enter ticket normal price' 
            size="100"
            min='12'
            //height="30"
            onChange={(e) => setPriceNormal(e.target.value)}
            >
        </InputStyle> 
        <InputStyle
            type='number'
            name='priceReduced'
            id='priceReduced'
            value={priceReduced}
            placeholder = 'Enter ticket reduced price' 
            size="100"
            min='8'
            //height="30"
            onChange={(e) => setPriceReduced(e.target.value)}
            >
        </InputStyle> 

        <form onSubmit = {onSubmit}>
            <Button>
                Add screening
            </Button>
        </form>

    </AddSreeningStyle>
  )
}

const AddSreeningStyle = styled.section`
    display: grid;
    justify-content: center;
    margin-top: 2%;
    font-weight: bold;
    font-size: 20px;
`

const InputStyle = styled.input`
    color-scheme: grey;
    margin-top: 2%;
    width: 100%;
    height: 100%;
`

const DropdownStyle = styled.div`
    position: relative;
    display: inline-block;
    &:hover{
        display: block;
    }
`

const ButtonStyle = styled.button`
    background-color: #04AA6D;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`

const DropdownContentA = styled.div`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
`

const Button = styled.button`
    background-color: #d34d18;
   // position: right;
    color: #000;
    height: 50px;
    width: 150px; //szerokosc przycisku
    font-size: 20px;
    border-radius: 20px; //okragle rogi
    cursor: pointer;
    border: none;
    margin-top: 7%;
    outline: white solid;
    transition: color 0.4s;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
    color: #ffffff;
    }
`

const MovieList = styled.ul`
  display:flex;
  flex-direction: column;
  margin:auto;
  width:70%;
`

const ListItem = styled.li`
  display:inline-block;
  margin-top:15px;
`

export default AdminPanel