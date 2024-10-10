const express = require('express')
const hordeRouter = express.Router()
const Horde = require ('../models/horde')

hordeRouter.get("/", async(req, res, next) => {
    try {
        const foundHorde = await Horde.find(req.body)
        return res.status(200).send(foundHorde)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

hordeRouter.post("/", async (req,res,next) =>{
    try {
        const newHorde = new Horde(req.body)
        const savedHorde = await newHorde.save()
        return res.status(201).send(savedHorde)
    } catch (err) {
        res.status(500)
        return next(error)
    }
})

module.exports = hordeRouter