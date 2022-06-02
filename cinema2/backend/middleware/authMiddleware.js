const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const protect = asnycHandler(async(req,res,next) => {
    let token

    
    if(req.headers.autherization && req.headers.autherization.startsWith('Bearer')){
        try {
            // Get token from header
            token=req.headers.autherization.split(' ')[1]

            // Veryify token
            const decoded=jwt.verify(token,process.env.JWT_SECRET)

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-userPassword')

            next()
        } catch (error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.export = { protect }