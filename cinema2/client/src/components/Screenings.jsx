import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Screenings(props) {

    console.log("Jestem w screenings!")

    // const movieId = props.id
    const dataBD = props.date
    const room = props.room
    const screeningID = props.screeningId
    
    console.log("ScreeenignID: " + screeningID)

    const formatTime = (time) => {
        var optionstime = {hour: 'numeric', minute: 'numeric'}
        return new Date(time).toLocaleTimeString([], optionstime)
    }

    const formatDate = (date) => {
        var optionsHour = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString([], optionsHour)
    }


    const time = formatTime(dataBD)
    const date = formatDate(dataBD)

    return (
        <Wrapper>
            HAlo Gdzie jestem?
            <Info>
                <DateStyle>
                    {date}
                </DateStyle>
                <DateStyle>
                    {time}
                </DateStyle>
                <DateStyle>
                    <div>
                        Room nr:
                    </div> 
                    {room}
                </DateStyle>
            </Info>
            <ButtonRow>
                <Button to={'ticket'} state = {{temp: [props.movieId, screeningID]}}>
                    Buy ticket
                </Button>
            </ButtonRow>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
    margin: auto;
    //width: 100%;
   //overflow: hidden;
    //position: relative;
    //border: 0;
    //margin-top:15px;
    //margin-left:20%;
   // outline: red solid;
    justify-content: center;
    align-items: center;
`

const DateStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   // flex-wrap: wrap;
   // outline: blue solid;
    //margin-left: 10px;
   // padding-left: 10px;
   // max-width: 100%;
    //grid-template-rows:80px;
    //background-color: black;
`


const Info = styled.section`
    display: grid;
    font-size: 1.25rem;
    font-weight: 600;
    //margin: 2px;
   // margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 2px;
    max-height: 60%;
`

const MyLink=styled(Link)`
    text-decoration: none;
    display: grid;
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
    //outline: red solid;
    transition: color 0.4s;
    position: relative;
    left: auto;
    top: 20px;
    justify-content: center;
    align-items: center;
    &:hover {
    color: #ffffff;
    }
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

export default Screenings