const express = require('express')
const withdrawalRouter = express.Router()
const Withdrawal = require('../model/Withdrawal')



withdrawalRouter.get("/", async(req, res, next) => {
    try {
        const foundWithdrawal = await Withdrawal.find()
        console.log(foundWithdrawal)         
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

withdrawalRouter.delete("/:withdrawalId" , async (req, res, next) => {
    try {
        const withdrawalId = req.params.withdrawalId
        const deletedWithdrawal = await Withdrawal.findByIdAndDelete(withdrawalId)
        return res.status(200).send(`Succesfully deleted ${deletedWithdrawal.title}`)  
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = withdrawalRouter