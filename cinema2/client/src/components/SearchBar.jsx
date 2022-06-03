import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function SerachBar() {
    const [input,setInput] = useState("");
    const navigate = useNavigate();

    const reg=/^\.\.\/|\.\.*$/;

    const submitHandler = (e) =>{
        e.preventDefault();
        // eslint-disable-next-line
        if (!reg.test(input)){
            navigate("/searched/"+input);
        }
        
    }

    return (
        <Wrapper>
            <FormStyle onSubmit={submitHandler}> 
                <FaSearch></FaSearch>
                <input onChange={(e)=>setInput(e.target.value)} type='text' value={input} placehoder='Search for a movie'/>    
            </FormStyle>
            <Header/>
        </Wrapper>
        )
}

const FormStyle=styled.form`
    margin: 0px 10px 0 10%;
    position: relative;
    width: 100%;
    input{
        border:none;
        background: #494949;
        color:white;
        padding: 10px 30px;
        border: none;
        border-radius: 10px;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: -8px;
        transform: translate(100%,-50%);
        color: white;
    }
`

const Wrapper=styled.div`
    display: flex;
    justify-content: right;
    margin-right: 25%;
    margin-top: 20px;
    margin-bottom: 20px
`

export default SerachBar

