const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res)=>{
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

module.exports=router;