const express = require ('express')
const depositRouter = express.Router()
const Deposit = require('../model/deposit')

depositRouter.get("/", async(req, res, next) => {
    try {
        const foundDeposit = await Deposit.find()        
        return res.status(200).send(foundDeposit)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

depositRouter.post("/", async(req, res, next) => {
    try{
        const newDeposit = new Deposit(req.body)
        const savedDeposit = await newDeposit.save()        
        return res.status(200).send(savedDeposit)
    } catch (err){
        res.status(500)
        return next(err)
    }
})

depositRouter.delete("/:depositId" , async (req, res, next) => {
    try {
        const depositId = req.params.depositId
        const deletedDeposit = await Deposit.findByIdAndDelete(depositId)
        return res.status(200).send(`Succesfully deleted ${deletedDeposit.title}`)  
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = depositRouter