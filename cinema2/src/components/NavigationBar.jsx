import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return ( 
      <div>
      <Wrapper>
        <Link to={'/'}>
          <Button >
            Home
          </Button>  
        </Link>
        <Link to={'/repertuar'}>
          <Button >
            Repertuar
          </Button>  
        </Link>
        <Link to={'/movies'}>
          <Button >
            Movies
          </Button>  
        </Link>  
        <Link to={'/popular'}>
          <Button >
            Popular
          </Button>  
        </Link>
      </Wrapper>
      </div>
  )
}


const Wrapper = styled.section`
  background-color: #d34d18;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #d34d18;
  color: #000;
  height: 50px;
  width: 5%;
  font-size: 20px;
  margin: 0 10px 0px 10px;
  cursor: pointer;
  border: none;
  //outline: red solid;
  transition: color 0.4s;
  &:hover {
    color: #ffffff;
  }
`;

export default NavigationBar