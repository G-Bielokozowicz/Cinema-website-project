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

    //dodwanie filmów  do bazy
    const [name, setName] = useState('')
    const [director, setDirector] = useState('')
    let [length, setLength] = useState('')
    let [description, setDescription] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [posterURL, setPosterURL] = useState('')

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
    const [addedMovie, setAddedMovie]= useState(false)
    const [errored, setErrored]=useState(false)
    const [errMessage,setErrMessage]=useState('')

    //umieszczanie seansu w bazie
    const token = JSON.parse(localStorage.getItem('user'))    
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

    const onSubmitMovie = (e) => {
        e.preventDefault()

        const data = {movieName: name, 
                    movieDirector: director, 
                    movieLength: length, 
                    movieDescription: description, 
                    movieReleaseYear: releaseYear,
                    moviePosterURL: posterURL
                }

        axios.post('http://localhost:5000/movies/add', data, config)
        .then(() => {
            console.log("New screening added")
            setAddedMovie(true)
            setErrored(false)
        })
        .catch((error)=>{
            setErrored(true)
            setAddedMovie(false)
            setErrMessage(error.response.data)
            console.log(error.response.data);
        })
    }

  return (
    <Wrapper>
        <AddSreeningStyle>
            <Headerstyle>
                Add screening info &nbsp;
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
            <InfoStyle>
                {
                    added ? (<>Screening added</>) : (<></>)
                }
                {
                    errored ? (<>{errMessage}</>):(<></>)
                }
            </InfoStyle>
        </AddSreeningStyle>



    {/* Dodawanie filmów */}
        <AddSreeningStyle>
            <Headerstyle>
                Add movie info &nbsp;
            </Headerstyle>

            <TextStyle>
                Put movie name
            </TextStyle>
            <InputStyle
                type='text'
                name='name'
                id='name'
                value={name}
                placeholder = 'Enter movie Name' 
                size="100"
                onChange={(e) => setName(e.target.value)}
                >
            </InputStyle> 

            <TextStyle>
                Movie director
            </TextStyle>
            <InputStyle
                type='text'
                name='director'
                id='director'
                value={director}
                placeholder = 'Enter movie director' 
                size="100"
                onChange={(e) => setDirector(e.target.value)}
                >
            </InputStyle> 
            <TextStyle>
                Movie length
            </TextStyle>
            <InputStyle
                type='number'
                name='length'
                id='length'
                value={length}
                placeholder = 'Enter movie length' 
                size="100"
                min={60}
                onChange={(e) => setLength(e.target.value)}
                >
            </InputStyle> 

            <TextStyle>
                Movie description
            </TextStyle>
            <InputStyle
                type='description'
                name='description'
                id='description'
                value={description}
                placeholder = 'Enter movie description' 
                size="100"
                onChange={(e) => setDescription(e.target.value)}
                >
            </InputStyle>
            <TextStyle>
                Year of the movie's release 
            </TextStyle> 
            <InputStyle
                type='number'
                name='releaseYear'
                id='releaseYear'
                value={releaseYear}
                placeholder = 'Enter release year' 
                size="100"
                min='1930'
                onChange={(e) => setReleaseYear(e.target.value)}
                >
            </InputStyle> 
            <TextStyle>
                Poster URL
            </TextStyle> 
            <InputStyle
                type='url'
                name='posterURL'
                id='posterURL'
                value={posterURL}
                placeholder = 'Enter poster URL' 
                size="100"
                onChange={(e) => setPosterURL(e.target.value)}
                >
            </InputStyle> 

            <form onSubmit = {onSubmitMovie}>
                <Button>
                    Add movie
                </Button>
            </form>
            <InfoStyle>
            {
                addedMovie ? (<>Movie added</>) : (<></>)
            }
            {
                errored ? (<>{errMessage}</>):(<></>)
            }
            </InfoStyle>    
        </AddSreeningStyle>

    </Wrapper>

  )
}

const InfoStyle = styled.section`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
 //   font-weight: initial;
   // outline: yellow solid;
    margin-left: 30%;
    width: 40%;
    margin-top: 3%;
    margin-bottom: 1%;
    color: #fffafa;
`

const TextStyle = styled.section`
    display: grid;
    font-size: 15px;
    font-weight: initial;
   // outline: yellow solid;
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
  //  outline: blue solid;
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
   // outline: green solid;
`

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
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
    
 //   outline: red solid;
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