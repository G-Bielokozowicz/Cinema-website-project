import React from 'react'
import styled from 'styled-components'

function NavigationBar() {
  return ( 
      <div>
      <Wrapper>
        <Button>
          Repertuar
        </Button>    
        <Button>
          Movies
        </Button>   
        <Button>
          Popular
        </Button>  
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