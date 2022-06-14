import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Header() {
  return (
    <section>
        <HeaderStyle>
            <UlStyle>
                <Title>
                    <TitStyle to ='/TAI.Kino'>
                    TAI.Kino                
                    </TitStyle>
                </Title>
                <RLStyle>
                    <LiStyle>
                        <LinkStyle to='/login'>
                            <FaSignInAlt/> Login
                        </LinkStyle>
                    </LiStyle>
                    <LiStyle>
                        <LinkStyle to='/register'>
                            <FaUser/> Register
                        </LinkStyle>
                    </LiStyle>
                </RLStyle>
            </UlStyle>
        </HeaderStyle>
    </section>
  )
}

const LinkStyle=styled(Link)`
    text-decoration: none;
    color: #D34D18;
    &:hover {
    color: #ffffff;
    }
`
const TitStyle=styled(Link)`
    text-decoration: none;
    color: #ffffff;
`
const Title = styled.h1`
    font-size: 5rem;
    font-weight: 1100;
    margin: 0 auto;
    margin-left: 107%;
`

const LiStyle=styled.li`
    margin-right: 10px;
    margin-top: 60px;
    svg{
        margin-left: 0%;
    }
`
const RLStyle = styled.li`
    margin-left: 80%;
    display: flex;
`

const UlStyle=styled.ul`
    list-style:none;
    display: flex;
    align-items: center;
`

const HeaderStyle=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    padding: 0px 0px;
`

export default Header