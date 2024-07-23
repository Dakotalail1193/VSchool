const express = require('express')
const budgetRouter = express.Router()
const Withdrawal = require('../model/withdrawal')
const deposit = require('../model/deposit')
const Deposit = require ('../model/deposit')

budgetRouter.get("/", async(req, res, next) => {
    try {
        const foundWithdrawal = await Withdrawal.find()
        const foundDeposit = await Deposit.find()
        return res.status(200).send(foundWithdrawal, foundDeposit)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

budgetRouter.post("/", async(req, res, next) => {
    try{
        const newWithdrawal = new Withdrawal(req.body)
        const savedWithdrawal = await newWithdrawal.save()
        const newDeposit = new Deposit(req.body)
        const savedDeposit = await newDeposit.save()
        return res.status(200).send(savedWithdrawal, savedDeposit)
    } catch (err){
        res.status(500)
        return next(err)
    }
})

module.exports = budgetRouter