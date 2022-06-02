const router = require('express').Router()


const {registerUser,
        loginUser,
        getMe} = require('../controllers/userController')

router.post('/add',registerUser)
router.post('/login',loginUser)
router.get('/me',getMe)

module.exports=router;