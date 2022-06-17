const express=require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const protect = require('./middleware/authMiddleware')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const uri=process.env.ATLAS_URI

mongoose.connect(uri)

const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB connection established")
})

const moviesRouter=require('./routes/movieRoutes')
const usersRouter=require('./routes/userRoutes')
const screeningsRouter=require('./routes/screeningRoutes')
const ticketRouter=require('./routes/ticketRoutes')
const commentRoutes=require('./routes/commentRoutes')


app.use('/users',usersRouter)
app.use('/screenings',screeningsRouter)
app.use('/tickets',ticketRouter)
app.use('/comments',commentRoutes)
app.use('/movies',moviesRouter)


app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})