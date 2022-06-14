const router = require('express').Router()
let User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

// Register user
const registerUser = asyncHandler(async(req, res)=>{
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword
    const userType = req.body.userType
    
    // Check if email and password are typed
    if (!userEmail || !userPassword){
        res.status(400)
        throw new Error("Add all fields")
    }

    // Check if user exists
    const userExists = await User.findOne({userEmail})
    if (userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(userPassword,salt)

    // Create user
    const newUser = new User({
        userEmail,
        userPassword: hashedPassword,
        userType,
    });

    // Save user to database
    newUser.save()
    .then(() => res.json({
        _id: newUser.id,
        email: userEmail,
        token: generateToken(newUser._id)
    }))
    .catch(err => res.status(400).json('Error: ' + err));
})

const loginUser = asyncHandler(async(req,res)=>{
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword

    // Find user with given email
    const user = await User.findOne({userEmail})

    if (user && (await bcrypt.compare(userPassword, user.userPassword))){
        res.json({
            _id: user._id,
            email: user.userEmail,  
            token: generateToken(user._id)       
        })
    }
    else {
        res.json('User not logged in')
    }
    
})

const getMe = asyncHandler(async(req,res)=>{

    res.status(200).json(req.user)

})



// Generate JWT
const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {registerUser,loginUser,getMe}