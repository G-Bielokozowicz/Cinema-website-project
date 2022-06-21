import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaTicketAlt, FaAdjust} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function Header() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const userToken = JSON.parse(localStorage.getItem('user')) 
  const userEmail = userToken.email

  console.log("userEmail: " + userEmail)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/movies/')
  }

  return (
    <HeaderStyle>
        <Wrapper>
            <Title to ='/TAI.Kino'>
            TAI.Kino                
            </Title>
           <RLStyle>
            {user ? (<>
              <LinkStyle to='/account'>
                <FaTicketAlt/> My Tickets
              </LinkStyle>
              <LinkStyle to='/' className='btn' onClick={onLogout}>
                {/* <button className='btn' onClick={onLogout}> */}
                  <FaSignOutAlt/> Logout
                {/* </button> */}
              </LinkStyle>
              <LinkStyle to='/admin'>
                <FaAdjust/> Admin Panel
              </LinkStyle>

                {/* {userEmail ? 'admin' (<>
                  <FaTicketAlt/> Admin Account
                </>)} */}
              </>
              
              ) : (<>
              <LinkStyle to='/login'>
                <FaSignInAlt/> Login
              </LinkStyle>
              <LinkStyle to='/register'>
                <FaUser/> Register
              </LinkStyle>
            </>
            )}
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