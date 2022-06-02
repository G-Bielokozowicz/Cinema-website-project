const router = require('express').Router()
let User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')


// TODO add updating user ticket array

// Get all users
router.route('/').get(async (req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: ' + err));
})

// Register
router.route('/add').post(async (req,res)=>{
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword
    const userType = req.body.userType
    
    const newUser = new User({
        userEmail,
        userPassword,
        userType,
    });
    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
})

//Login
router.route('/login').post(async (req,res)=>{

    res.json('User logged in')

})

module.exports=router;