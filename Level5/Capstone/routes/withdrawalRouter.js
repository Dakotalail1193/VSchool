const express = require('express')
const withdrawalRouter = express.Router()
const Withdrawal = require('../model/withdrawal')


withdrawalRouter.get("/", async(req, res, next) => {
    try {
        const foundWithdrawal = await Withdrawal.find()        
        return res.status(200).send(foundWithdrawal)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

withdrawalRouter.post("/", async(req, res, next) => {
    try{
        const newWithdrawal = new Withdrawal(req.body)
        const savedWithdrawal = await newWithdrawal.save()        
        return res.status(200).send(savedWithdrawal)
    } catch (err){
        res.status(500)
        return next(err)
    }
})

module.exports = withdrawalRouter