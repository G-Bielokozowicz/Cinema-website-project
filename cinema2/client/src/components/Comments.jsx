import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Comments(props) {
    
    const API_URL = 'http://localhost:5000/comments/'
    
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWM0ZmRlYmViNmZjZjkxYzQzMTc3MCIsImlhdCI6MTY1NTU2Njk0NCwiZXhwIjoxNjU4MTU4OTQ0fQ.eRNssIhWVg3b9dmoZ40V17NWJd_-xO-Ot2jzS8LU8rc"
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };

    const params = useParams()
    
    const location = useLocation()

    const movieId = location.state.temp[0]
    const name = location.state.temp[1]
    const image = location.state.temp[2]

    console.log(movieId)

    const [comments, setComments] = useState([])

    const getComments = async () =>{
        axios.get(API_URL + `movie/${movieId}`)
        .then((response) => {
            setComments(response.data)
            console.log(comments.size)
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    
    useEffect(()=>{
        getComments()
    },[])


    return (
        <Wrapper>
            <Card>
                <NameAndImage>
                    <Info>
                        {name}         
                    </Info>
                    <img src={image} width={297} height={420} alt='Poster'/>
                </NameAndImage>
                <TextStyle>
                    <HeaderStyle>
                        User Comments:
                    </HeaderStyle>
                    <div>
                        {comments.map((comment)=>{
                        return (
                            <div key={comment._id}>
                                <div com={comment.commentBody} />
                                {comment.commentBody}
                            </div>
                        )
                        })}
                    </div>
                </TextStyle>
            </Card>
       </Wrapper>
    )
}

const Card = styled.section`
    display: flex;
    /* justify-content: space-around; */
    /* flex-wrap: wrap; */
    //flex-direction: column;
    align-items: center;
    max-width: 80%;
    margin-left:10%;
    margin-top:2%;
    /* outline: red solid; */
`
const Info = styled.div`
    margin-bottom: 1%;
    font-size: 25px;
    font-weight: bold;
  //  outline: blue solid;
`

const NameAndImage = styled.div`
  //  outline: purple solid;

`

const TextStyle = styled.div`
    display: grid;
    justify-content: space-around;
    align-items: end;
    margin-left: 10%;
  //  outline: red solid;

`

const HeaderStyle = styled.div`
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10%;
   // outline: green solid;

`

const Wrapper=styled.div`
    /* display:grid; */
    /* justify-content: center; */
    /* margin-top: 25px; */
`

export default Comments