import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import RepertuarScreenings from './RepertuarScreenings'

function GetScreeningsRep(props) {

    let movieId = props.id
    let selectedDate = props.selectedDate

    console.log("selectedDate w getscreeningsrep: " + selectedDate)

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

   
    return (
        <div>
            {screenings.map((screen) => {
                return (
                    <div key={screen._id}>
                       {screen._id}
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