import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
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

    const commentMovie = location.state.temp[0]
    const name = location.state.temp[1]
    const image = location.state.temp[2]

   // console.log(movieId)

    const [comments, setComments] = useState([])
    
    const [formData, setFormData] = useState({
        addingComment: '',

    })

    const { comment} = formData

    const getComments = async () =>{
        axios.get(API_URL + `movie/${commentMovie}`)
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

    //blokowanie przycisku
    const [isPending, setIsPending] = useState(false)

    //dodwanie komenatrzy do bazy
    const [commentBody, setText] = useState('')
    
    const token = JSON.parse(localStorage.getItem('user'))
  //  console.log("token: " + token.token)
    
    const config = {
        headers: { Authorization: `Bearer ${token.token}` }
    };

    const onSubmit = (e) => {
        e.preventDefault()
          
        const data = {commentMovie, commentBody}

        setIsPending(true);

        axios.post('http://localhost:5000/comments/add', data, config)
        .then(() => {
            console.log("New comment added")
            setIsPending(false);
        })
        .catch((error)=>{
        console.log(error);
        })
    }


    return (
        <Wrapper>
            <Card>
                <NameAndImage>
                    <Info>
                        {name}         
                    </Info>
                    <img src={image} width={297} height={420} alt='Poster'/>
                </NameAndImage>
                <form onSubmit={onSubmit}>
                    <CommentsWindow>
                        <Leavestyle>
                            Leave your comment
                        </Leavestyle>
                        <input 
                            type='text'
                            name='text'
                            id='text'
                            value={commentBody}
                            placeholder = 'Enter your comment' 
                            size="100"
                            //height="30"
                            onChange={(e) => setText(e.target.value)}
                            >
                        </input>
                        
                            {!isPending && 
                                <button className='btn btn-block' type='submit'>
                                    Add Comment
                                </button>
                            }
                                                    
                            {isPending && 
                                <button disabled>
                                    Thanks for your comment
                                </button>
                            }
                    </CommentsWindow>
                </form>
            </Card>
            <TextStyle>
                <HeaderStyle>
                    User Comments:
                </HeaderStyle>
                    {comments.map((comment)=>{
                    return (
                        <CommentsStyle>
                            <div key={comment._id}>
                                <div com={comment.commentBody}/>
                                {comment.commentBody}
                            </div>
                        </CommentsStyle>
                    )
                    })}

            </TextStyle>
       </Wrapper>
    )
}

const ButtonStyle = styled.div`
  //  background-color: #d34d18;
   // border-radius: 20%;
`

const Leavestyle = styled.div`
    font-weight: bold;
    font-size: 25px;
`

const Card = styled.section`
    display: flex;
    /* justify-content: space-around; */
    /* flex-wrap: wrap; */
    //flex-direction: column;
    align-items: center;
    max-width: 80%;
    margin-left:10%;
    margin-top:2%;
   // outline: red solid;
`
const Info = styled.div`
    margin-bottom: 1%;
    font-size: 25px;
    font-weight: bold;
   // outline: blue solid;
    /* line-height: 28px; */
`

const NameAndImage = styled.div`
    //outline: purple solid;

`

const CommentsStyle = styled.div`
    margin-bottom: 8%;
    //outline: purple solid;

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
const CommentsWindow= styled.div`
    display: grid;
    //font-weight: bold;
    //font-size: 25px;
   // box-sizing: padding-box;
   // margin-bottom: 10%;
    margin-left: 10%;
   // outline: green solid;

`

const Wrapper=styled.div`
    /* display:grid; */
    /* justify-content: center; */
    /* margin-top: 25px; */
`

export default Comments