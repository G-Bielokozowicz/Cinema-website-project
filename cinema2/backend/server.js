const express=require('express')
const cors = require('cors')
const mongoose=require('mongoose')

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

app.use('/movies',moviesRouter)


app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})