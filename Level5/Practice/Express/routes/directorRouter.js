const express = require ("express")
const directorRouter = express.Router()
const Director = require("../models/director")

directorRouter.get("/", async (req, res, next) => {
    try {
        const foundDirector = await Director.find()
        return res.status(200).send(foundDirector)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

directorRouter.post("/", async (req, res, next) => {
    try {
        const newDirector = new Director (req.body)
        const savedDirector = await newDirector.save()
        return res.status(200).send(savedDirector)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


module.exports = directorRouter