import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

function RepertuarCom(props) {

    const screeningsDate = props.date

    //formatowanie daty i godziny
    const formatTime = (time) => {
        var optionstime = {hour: 'numeric', minute: 'numeric'}
        return new Date(time).toLocaleTimeString([], optionstime)
    }

    const formatDate = (date) => {
        var optionsHour = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString([], optionsHour)
    }

    const time = formatTime(screeningsDate)
    const date = formatDate(screeningsDate)

    // console.log("time: " + time)
    // console.log("date: " + date)

  return (
    <RepertuarStyle>
        <ScreeningsStyle>
            {/* {date} */}
        </ScreeningsStyle>
    </RepertuarStyle>
  )
}

const RepertuarStyle = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center; */
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


export default RepertuarCom