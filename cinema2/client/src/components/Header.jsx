import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


function Header() {
  return (
    <HeaderStyle>
        <UlStyle>
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
        </UlStyle>

    </HeaderStyle>
  )
}

const LinkStyle=styled(Link)`
    text-decoration: none;
    color: #D34D18;
    &:hover {
    color: #ffffff;
    }
`

const LiStyle=styled.li`
    margin-left:10px;
    svg{
       margin-right:10px;
    }
`

const UlStyle=styled.ul`
    list-style:none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderStyle=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`

export default Header