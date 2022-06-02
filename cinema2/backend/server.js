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

const moviesRouter=require('./routes/movies')
const usersRouter=require('./routes/userRoutes')

app.use('/movies',moviesRouter)
app.use('/users',usersRouter)


app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})