import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import RepertuarScreenings from './RepertuarScreenings'

function GetScreeningsRep(props) {

    const movieId = props.id
    const selectedDate = props.selectedDate

    console.log("selectedDate: " + selectedDate)

    //pobieranie senasów z bazy
    const [screenings, setScreenings] = useState([])

    const getScreenings = async () =>{
      axios.get('http://localhost:5000/screenings/' + movieId)
      .then((response) => {
        setScreenings(response.data)
        filtrScreenings(screenings)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
   
    useEffect(()=>{
        getScreenings()
    },[])

    function filtrScreenings(screenings){
        screenings.filter(screenings => screenings.screeningDate == selectedDate).map(filteredScreenings => {
            filteredScreenings(screenings)
            console.log(filteredScreenings(screenings))
        })
    } 

    // return (

    //     <div>
    //         {screenings.map((screen) => {
    //         return(
    //             <div key = {screen._id}>
    //                 {/* <RepertuarScreenings date = {screen.screeningDate}></RepertuarScreenings> */}
    //                 {screenings.filter(screenings => screenings.screeningDate == selectedDate).map(filteredScreenings => {
    //                 <li>
    //                     {filteredScreenings.screenings}
    //                 </li>
    //             </div>
    //             ))}
    //     </div>
    // )
}

const RepertuarStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`
const MovieStyle = styled.div`
    /* display: grid;
    align-items: center;
    justify-content: center; */
`

const ScreeningsStyle = styled.div`
    /* display: grid;
    align-items: center;
    justify-content: center; */
`


export default GetScreeningsRep