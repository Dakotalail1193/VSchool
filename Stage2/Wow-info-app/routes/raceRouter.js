const express = require('express')
const raceRouter = express.Router()
const Race = require('../models/races')

raceRouter.get("/", async(req, res, next) => {
    try {
        const foundRace = await Race.find()
        return res.status(200).send(foundRace)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

raceRouter.post("/", async (req,res,next) =>{
    try {
        const newRace = new Race(req.body)
        const savedRace = await newRace.save()
        return res.status(201).send(savedRace)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = raceRouter