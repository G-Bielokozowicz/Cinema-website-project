import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function MovieCard(props) {

    const movieId = props.id
    //console.log(movieId)

    return (
        <Card>
            <img src={props.image} width={200} height={300} alt='Poster'/>
            <Info>
                <Title to={`/movie/${props.name}`} state= {{ temp: [props.id, props.description, props.director, props.image] }}>
                    {props.name}
                </Title>
                <Description>
                    {props.description}
                </Description>
                    <MyLink to={'comments'} state= {{ id: [props.id]}} >
                        Leave comments
                    </MyLink>               
            </Info>
        </Card>
    )
}

const Card = styled.section`
    display:flex;
    //width: 100%;
    overflow: hidden;
    position: relative;
    border: 0;
    //margin-top:15px;
    //margin-left:20%;
    outline: red solid;
`

const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    outline: blue solid;
    //margin-left: 10px;
    padding-left: 10px;
    max-width: 100%;
    grid-template-rows:80px;
    background-color: black;
`
const Title = styled(Link)`
    background-color: black;
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 2px;
    margin-bottom: 20px;
    outline: green solid;
    &:hover {
    color: #8a8989;
   // text-decoration: overline;
    }
`

const Description = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 2px;
    max-height: 60%;
    outline: yellow solid;
`

const MyLink=styled(Link)`
    text-decoration: none;
    display: grid;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000000;
    color: #6a6a6a;
    height: 40px;
   // width: 190px;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
    outline: red solid;
    transition: color 0.4s;
    position: relative;
    left: auto;
    top: 20px;
    &:hover {
    color: #ffffff;
    }
`

export default MovieCard