const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

const app = express()
const PORT = 3001


app.use(cors())
app.use(express.json())
app.use('/api/user',userRoutes)


mongoose.connect('mongodb://127.0.0.1:27017/resume');


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})