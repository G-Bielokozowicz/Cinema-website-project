import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Header() {
  return (
    <HeaderStyle>
        <Wrapper>
            <Title to ='/TAI.Kino'>
            TAI.Kino                
            </Title>
        <RLStyle>
                <LinkStyle to='/login'>
                    <FaSignInAlt/> Login
                </LinkStyle>

                <LinkStyle to='/register'>
                    <FaUser/> Register
                </LinkStyle>
        </RLStyle>
        </Wrapper>
    </HeaderStyle>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`;

const Title = styled.h1`
  color: #ffffff;
  height: 150px;
  font-size: 100px;
  margin: 0 10px 0px 10px;
`;

const HeaderStyle=styled.div`
   height: 140px; //zmiana wysokosci przestrzeni, na której jest tytul
`

const LinkStyle=styled(Link)`
    text-decoration: none;
    color: #D34D18;
    &:hover {
    color: #ffffff;
    }
    margin-left: 0px;
    margin-right: 30px;

`
const RLStyle = styled.li`
  display: flex;
  margin-top: 100px;
`
export default Header