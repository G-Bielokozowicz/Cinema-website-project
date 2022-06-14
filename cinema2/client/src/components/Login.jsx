import React from 'react'
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import styled from 'styled-components'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.targer.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return <>
        <WindowsStyle>
            <section className = "heading">
                <h2>
                    <FaSignInAlt /> Login
                </h2>
                <p>Login and start setting goals</p>
            </section>

            <section className='form'> 
                <form onSubmit={onSubmit}>
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

export default Login