const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT = 3001


app.use(express.json())
app.use(cors({ 
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true // Allow cookies to be sent along with the request
}));

mongoose.connect('mongodb://127.0.0.1:27017/RTFP')
app.use('/api/user',userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})