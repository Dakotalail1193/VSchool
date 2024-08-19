const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require ('morgan')
require ('dotenv').config()

app.use(express.json)
app.use(morgan('dev'))

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }
}

connectToDb()

app.use('/api/auth', require('./routes/authRouter'))
app.use('/api/withdrawal', require('./routes/withdrawalRouter'))
app.use('/api/deposit', require('./routes/depositRouter'))

app.use ((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})