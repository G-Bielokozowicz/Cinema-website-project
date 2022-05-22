import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function MovieCard(props) {


    return (
        <Card>
            <FillerPoster />
            <Info>
                <Title>
                    {props.name}
                </Title>
                <Description>
                    Grupa superbohaterów, na czele z Thorem, Iron Manem i Hulkiem, łączy siły, by obronić Ziemię przed inwazją kosmitów.
                </Description>
                    <MyLink to={'/movie/avengers'}>
                        Buy ticket
                    </MyLink>               
            </Info>
        </Card>
    )
}

const Card = styled.section`
    display:flex;
    width: 100%;
    overflow: hidden;
    position: relative;
    border: 0;
    //margin-top:15px;
    //margin-left:20%;
   // outline: red solid;
`

const FillerPoster = styled.div`
    min-width: 200px;
    min-height: 300px;
    background-color: #dbdada;
    border-radius: 5px;
    //margin-right: 15px;
    display: block;
    color: transparent;
`
const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    //outline: blue solid;
    //margin-left: 10px;
    padding-left: 10px;
    max-width: 100%;
    grid-template-rows:80px;
    background-color: black;
`
const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 600;
    margin: 2px;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 2px;
    max-height: 60%;
`

const MyLink=styled(Link)`
    text-decoration: none;
    background-color: #d34d18;
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
    //outline: red solid;
    transition: color 0.4s;
    position: relative;
    left: 70%;
    top: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover {
    color: #ffffff;
    }
`

export default MovieCard