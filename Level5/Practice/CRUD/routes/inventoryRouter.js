const express = require ('express')
const inventoryRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const Inventory = require ('../models/inventory')

inventoryRouter.get("/", async(req, res, next) => {
    try {
        const foundInventory = await Inventory.find()
        return res.status(200).send(foundInventory)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.get("/:inventoryId", async (req, res, next) => {
    try {
        const inventoryId = req.params.inventoryId
        const foundMovie = await Inventory.findById(inventoryId)
        return res.status(200).send(foundMovie)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.post("/", async (req, res, next) => {
    try {
        const newInventory = new Inventory(req.body)
        const savedInventory = await newInventory.save()
        return res.status(201).send(savedInventory)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.delete("/:inventoryId", async(req, res, next) => {
    try {
        const inventoryId = req.params.inventoryId
        const deletedItem = await Inventory.findByIdAndDelete(inventoryId)
        return res.status(200).send(`You have succesfully deleted ${deletedItem.item}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

inventoryRouter.put("/:inventoryId", async(req, res, next) => {
    try {
        const inventoryId = req.params.inventoryId
        const updatedItem = await Inventory.findByIdAndUpdate(
            inventoryId,
            req.body,
            {new: true}
        )
        return res.status(200).send(updatedItem)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})


module.exports = inventoryRouter