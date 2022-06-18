import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Screenings(props) {

    const movieId = props.id
    const dataBD = props.date
    //console.log(movieId)

    const format = () => {
        var options = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date().toLocaleDateString([], dataBD)
    }

    const formatHour = () => {
        var optionsHour = {hour: 'numeric', minute: 'numeric'}
        return new Date().toLocaleTimeString([], optionsHour)
    }

    const data = format()
    const hour = formatHour()

    return (
        <Wrapper>
            <Info>
                <DateStyle>
                    {data}
                </DateStyle>
                <DateStyle>
                    {hour}
                </DateStyle>
            </Info>
            <ButtonRow>
                <Button>
                    Buy ticket
                </Button>
            </ButtonRow>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: grid;
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
    outline: blue solid;
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

const Button = styled.div`
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