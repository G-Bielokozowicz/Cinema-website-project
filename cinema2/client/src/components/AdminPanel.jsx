import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'


function AdminPanel() {

    //dodwanie seansów  do bazy
    const [movieName, setMovieName] = useState('')
    const [room, setRoom] = useState('1')
    let [date, setDate] = useState('2022-06-22')
    let [time, setTime] = useState('12:00:00')
    const [priceNormal, setPriceNormal] = useState('20')
    const [priceReduced, setPriceReduced] = useState('15')

    let dateTime = `${date}T${time}Z`

    //console.log("dateTime: ", dateTime)

    //pobieraniee wszytskich filmw
    const [movies, setMovies] = useState([])


    

    const getMovies = async () =>{
      axios.get('http://localhost:5000/movies/')
      .then((response) => {
        setMovies(response.data)
        setMovieName(response.data[0]._id)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
   
    useEffect(()=>{
      getMovies()
    },[])

    const [added, setAdded]= useState(false)
    const [errored, setErrored]=useState(false)
    const [errMessage,setErrMessage]=useState('')

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
            setAdded(true)
            setErrored(false)
        })
        .catch((error)=>{
            setErrored(true)
            setAdded(false)
            setErrMessage(error.response.data)
            console.log(error.response.data);
        })
    }

  return (
    <AddSreeningStyle>
        <Headerstyle>
            Add the screening values &nbsp;
        </Headerstyle>
        <TextStyle>
            Choose movie name
        </TextStyle>
        <MovieStyle>
            <select onChange={(e) => setMovieName(e.target.value)}>
                {movies.map((movie)=>{
                    return (
                        <option value={movie._id} key={movie._id}>
                            {movie.movieName}
                        </option>
                    )
                })}
            </select>
        </MovieStyle>
        <TextStyle>
            Room number
        </TextStyle>
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
        <TextStyle>
            Screening date
        </TextStyle>
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
        <TextStyle>
            Screening time
        </TextStyle>
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
        <TextStyle>
            Normal ticket price
        </TextStyle> 
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
        <TextStyle>
            Reduced ticket price
        </TextStyle> 
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
        {
            added ? (<>Screening added</>) : (<></>)
        }
        {
            errored ? (<>{errMessage}</>):(<></>)
        }
    </AddSreeningStyle>
  )
}

const TextStyle = styled.section`
    display: grid;
    font-size: 15px;
    font-weight: initial;
  //  outline: yellow solid;
    margin-left: 30%;
    width: 40%;
    margin-top: 3%;
    margin-bottom: 1%;
    color: #454343;
`

const Headerstyle = styled.section`
    text-align: center; 
    margin-top: 4%;
    font-weight: bold;
    font-size: 20px;
`

const MovieStyle = styled.section`
    display: grid;
    font-size: 15px;
   // outline: blue solid;
    margin-left: 30%;
    size: 10px;
    width: 40%;
    height: 30px;

`

const AddSreeningStyle = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;
  //  width: 50%;
  //  outline: green solid;
`

const InputStyle = styled.input`
    display: grid;
    justify-content: space-between;
    align-items: center;
    margin-left: 30%;
    height: 30px;

    color-scheme: grey;
    background-color: #3b3a3a;
    border: none;
    color: white;
    width: 40%;
    /* height: 100%; */
    
  //  outline: red solid;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #d34d18;
    margin-left: 38%;
    color: #000;
    height: 50px;
    width: 150px; //szerokosc przycisku
    font-size: 20px;
    border-radius: 20px; //okragle rogi
    border: none;
    margin-top: 5%;
   // outline: white solid;
   // transition: color 0.4s;
    text-decoration: none;

   
    &:hover {
    color: #ffffff;
    }
`
export default AdminPanel