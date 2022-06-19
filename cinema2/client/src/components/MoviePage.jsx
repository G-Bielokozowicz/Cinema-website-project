import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Screenings from './Screenings'

// to też trzeba będzie z bazy danych brac
function MoviePage(props) {

    const API_URL = 'http://localhost:5000/screenings/'
    
    const params = useParams()
    const name = params.name.charAt(0).toUpperCase() + params.name.slice(1)
    
    const location = useLocation()


    const movieId = location.state.temp[0]
    const description=location.state.temp[1]
    const director=location.state.temp[2]
    const image=location.state.temp[3]

    const [screenings, setScreenings] = useState([])

    const getScreenings = async () =>{
      axios.get(API_URL + movieId)
      .then((response) => {
        setScreenings(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
   
    useEffect(()=>{
        getScreenings()
    },[])

  //  console.log(screenings[0])

    // console.log( Object.keys(movieId))

    return (
        <Card>
            <MovieDesc>
                <img src={image} width={320} height={400} alt='Poster'/>
                <Info>
                    <TableRow>
                        <TitleRow>
                            Tytuł:
                        </TitleRow>
                        <TableText>
                            {name}
                        </TableText>
                    </TableRow>
                    <TableRow>
                        <TitleRow>
                            Opis:
                        </TitleRow>
                        <TableText>
                            {description}
                        </TableText>
                    </TableRow>
                    <TableRow>
                        <TitleRow>
                            Reżyser:
                        </TitleRow>
                        <TableText>
                            {director}
                        </TableText>
                    </TableRow>     
                </Info>
            </MovieDesc>
            <ScreeningsStyle>
                {screenings.map((screen) => {
                    return(
                        <ScreenStyle key = {screen._id}>
                            <Screenings date = {screen.screeningDate} room={screen.screeningRoom} screeningId={screen._id} ticketNormal = {screen.screeningPriceNormal} ticketReduced = {screen.screeningPriceReduced}/>
                        </ScreenStyle>
                    )
                })}
            </ScreeningsStyle>
        </Card>
  )
}

const Card = styled.section`
    display: gridbox;
    justify-content: center;
    align-items: center;
  //  width: 100%;
    max-width: 60%;
    //height: 445px;
    //overflow: hidden;
  //  position: relative;
    //border: 0;
    /* margin-left:10%;
    margin-right:10%;
    margin-top:2%; */
    outline: green solid;
`

const MovieDesc = styled.section`
    display: flex; //dzieki temu napisy sa obok img
`
const ScreeningsStyle = styled.section`
    /* display: flex; */ //dzieki temu seanse sa jede pod drugim
`
const ScreenStyle = styled.section`
    font-weight: 100;
`

const Info = styled.div`
   // display: table;
    //flex-wrap: wrap;
    //box-sizing: border-box;
    padding-left: 14px;
   // padding-right: 14px;
   // max-width: 100%;
   // grid-template-rows:80px;
    background-color: black;
   // position: relative;
`

const TableRow = styled.div`
    //display: table-row;
    border-bottom: solid 1px;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-top: 10px;
`

const TitleRow = styled.div`
    display: table-cell;
    min-width: 100px;
    font-size: 1.1rem;
    font-weight: 700;
`

const TableText = styled.div`
    display: table-cell;
    font-size: 1.05rem;
    font-weight: 600;
    margin: 2px;
    max-height: 60%;
    margin-bottom:8px;
    padding-bottom: 8px;
    min-width: 160px;
    box-sizing: border-box;
`

const ButtonRow=styled.section`
    display: grid;
    //justify-content: right;
  //  align-items: center;
   // position: absolute;
   // bottom: 0;
   // right: 0;
    margin-bottom: 2%;
 //   margin-right: 1.5%;
`

const Button = styled(Link)`
    background-color: #d34d18;
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

export default MoviePage