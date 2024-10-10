const express = require('express')
const allianceRouter = express.Router()
const Alliance = require('../models/alliance')

allianceRouter.get("/", async(req, res, next) => {
    try {
        const foundAlliance = await Alliance.find(req.body)
        return res.status(200).send(foundAlliance)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

allianceRouter.post("/", async (req,res,next) =>{
    try {
        const newAlliance = new Alliance(req.body)
        const savedAlliance = await newAlliance.save()
        return res.status(201).send(savedAlliance)
    } catch (err) {
        res.status(500)
        return next(error)
    }
})

module.exports = allianceRouter