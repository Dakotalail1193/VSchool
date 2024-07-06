const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())




app.listed(8000, ()=> {
    console.log("Server is running on port 8000")
})