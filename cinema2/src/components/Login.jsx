import React from 'react'
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from './Spinner'
import validator from 'validator'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

    const [emailError, setEmailError] = useState('')

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        if (!validator.isEmail(email)) {
            setEmailError('Please enter valid email!')
          } 
        else{
        setEmailError('')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            userEmail: email,
            userPassword: password,
            userType: 'user' 
        }
        dispatch(login(userData))
    }

    if(isLoading){
        return <Spinner />
    }


    return <>
        <WindowsStyle>
            <section className = "heading">
                <h2>
                    <FaSignInAlt /> Login
                </h2>
            </section>

            <section className='form'> 
                <form onSubmit={onSubmit}>
                    <ValidStyle>
                       {emailError}
                    </ValidStyle>
                    <WindowStyle >
                        <input 
                            type = "email" 
                            className = 'form-control' 
                            id='email'
                            name='email' 
                            value={email} 
                            placeholder = 'Enter your email' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    
                    <WindowStyle>
                        <input 
                            type = "password" 
                            className = 'form-control' 
                            id='password'
                            name='password' 
                            value={password} 
                            placeholder = 'Enter password' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    <ButtonStyle>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-block'>
                                Submit
                            </button>
                        </div>
                    </ButtonStyle>
                </form>
            </section>
        </WindowsStyle>
    </>
}

const WindowsStyle = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const WindowStyle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ButtonStyle = styled.div`
  display: grid;
  justify-content: center;
  //align-items: center;
`;

const ValidStyle = styled.div`
  color: #c50e0e;
  font-size: 12px;
`;

export default Login