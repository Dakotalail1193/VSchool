const express = require("express")
const citiesRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const cities = [
    {name:"Charlotte", state:"NC", visited: true, _id: uuidv4}    
]

citiesRouter.use("/", (req, res, next) => {
    console.log("Worked")
    next()
})

citiesRouter.get("/",(req, res) => {
    res.send(cities)
})

module.exports = citiesRouter

