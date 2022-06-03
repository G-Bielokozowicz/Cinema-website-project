import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password: '',
    })

    const { name, email, password, password2} = formData

    return (
    <div>Register</div>
    )
}

export default Register