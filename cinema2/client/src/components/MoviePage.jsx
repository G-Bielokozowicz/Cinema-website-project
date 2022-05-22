import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

// to też trzeba będzie z bazy danych brac
function MoviePage(props) {
    
    const params = useParams()
    const name = params.name.charAt(0).toUpperCase() + params.name.slice(1)
    const location = useLocation()


    const description=location.state.temp[0]
    const director=location.state.temp[1]
    const image=location.state.temp[2]

    return (
        <Card>
            <img src={image} width={320} height={500} alt='Poster'/>
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
                        Obsada:
                    </TitleRow>
                    <TableText>
                        Robert Downey Jr., Chris Hemsworth, Chris Evans, Mark Ruffalo, Scarlett Johansson, Jeremy Renner, Tom Hiddleston
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
                <ButtonRow>
                    <Button to={'ticket'} state={{ time: '11:40'}}>        
                        11:40
                    </Button>  
                    <Button to={'ticket'} state={{ time:  '14:20'}}>              
                        14:20
                    </Button> 
                    <Button to={'ticket'} state={{ time: '17:30'}}>             
                        17:30
                    </Button> 
                    <Button to={'ticket'} state={{ time: '21:30'}}>             
                        21:30
                    </Button > 
                </ButtonRow>      
            </Info>
        </Card>
  )
}

const Card = styled.section`
    display:flex;
    width: 100%;
    max-width: 1250px;
    height: 445px;
    overflow: hidden;
    position: relative;
    border: 0;
    margin-left:17%;
    margin-top:2%;
   // outline: red solid;
`

const Info = styled.div`
    display: table;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-left: 14px;
    padding-right: 14px;
    max-width: 100%;
    grid-template-rows:80px;
    background-color: black;
    position: relative;
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
    display: flex;
    justify-content: right;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 2%;
    margin-right: 1.5%;
`

const Button = styled(Link)`
    background-color: #d34d18;
    position: right;
    color: #000;
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 20px;
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
`

export default MoviePage