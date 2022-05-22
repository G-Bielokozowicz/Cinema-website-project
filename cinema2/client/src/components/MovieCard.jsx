import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function MovieCard(props) {


    return (
        <Card>
            <img src={props.image} width={200} height={300} alt='Poster'/>
            <Info>
                <Title>
                    {props.name}
                </Title>
                <Description>
                    {props.description}
                </Description>
                    <MyLink to={`/movie/${props.name}`}>
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