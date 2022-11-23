import React from 'react'
import Login from '../components/Login'
import styled from 'styled-components'


function ConfirmRegistration() {
  return (
    <div>
      <Wrapper2>
        <Wrapper>
          Rejestracja przebiegła pomyślnie.
        </Wrapper>
        <Wrapper>
          Zaloguj się na swoje konto.
        </Wrapper>
      </Wrapper2>
        <Login/>
    </div>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Wrapper2 = styled.section`
  margin-top: 30px;
  margin-bottom: 10px;
`;

export default ConfirmRegistration