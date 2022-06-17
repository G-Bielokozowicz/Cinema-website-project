import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import styled from 'styled-components'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import validator from 'validator'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

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
      navigate('/confirm/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const [emailError, setEmailError] = useState('')

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError(':)')
    } 
    else {
      setEmailError('Enter valid Email!')
    }
  }

   
  // const validateEmail = (e) => {
  //   var email = e.target.value
  
  //   if (validator.isEmail(email)) {
  //     setEmailError('Valid Email :)')
  //   } else {
  //     setEmailError('Enter valid Email!')
  //   }
  // }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        userEmail: email,
        userName: name,
        userPassword: password,
        userType: 'user' 
      }

       dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

    return <>
        <WindowsStyle>
            <section className = "heading">
                <h2>
                    <FaUser /> Register
                </h2>
                <p>Please create an account</p>
            </section>

            <section className='form'> 
                <form onSubmit={onSubmit}>
    
                    <ValidStyle>
                       {emailError}
                    </ValidStyle>
                    <WindowStyle className='form-group'>
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
                    <WindowStyle className='form-group'>
                        <input 
                            type = "text" 
                            className = 'form-control' 
                            id='name'
                            name='name' 
                            value={name} 
                            placeholder = 'Enter your name' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    <WindowStyle className='form-group'>
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
                    <WindowStyle className='form-group'>
                        <input 
                            type = "password2" 
                            className = 'form-control' 
                            id='password2'
                            name='password2' 
                            value={password2} 
                            placeholder = 'Confrim password' 
                            size={30}
                            onChange={onChange}>
                        </input>
                    </WindowStyle>
                    <ButtonStyle >
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
 // size: 20px;
  //align-items: center;
`;

const ValidStyle = styled.div`
  color: #c50e0e;
  font-size: 12px;
`;

export default Register