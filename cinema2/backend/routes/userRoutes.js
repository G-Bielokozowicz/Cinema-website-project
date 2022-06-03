const router = require('express').Router()
const { protect } = require('../middleware/authMiddleware')

const {registerUser,
        loginUser,
        getMe,
        addTicket} = require('../controllers/userController')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
router.put('/me/addTicket',protect,addTicket)

module.exports=router;