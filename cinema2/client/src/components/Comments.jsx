import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Comments(props) {

    const API_URL = 'http://localhost:5000/screenings/'
    
    const params = useParams()
    
    const location = useLocation()

    const movieId = location.state.temp[0]
    const name = location.state.temp[1]
    const image = location.state.temp[2]


    return (
        <Card>
            <Info>
                {name}         
            </Info>
            <img src={image} width={297} height={420} alt='Poster'/>
        </Card>
    )
}

const Card = styled.section`
    /* display: grid;
    justify-content: center;
    align-items: center; */
    max-width: 80%;
    margin-left:10%;
    margin-top:2%;
   // outline: red solid;
`
const Info = styled.div`
    /* display: grid;
    justify-content: center;
    align-items: center; */
    margin-bottom: 1%;
    font-size: 25px;
    font-weight: bold;
`

export default Comments