const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const todoList = [
    {
        name:"Laundry",
        description:"Wash, Dry, and Hang Clothes",
        imageUrl:"https://housing.sfsu.edu/sites/default/files/images/laundry_protocol.png",
        completed: false,
        _id: uuidv4()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todoList)
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todoList.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()    
    todoList.push(newTodo)
    res.send(`Succesfully added ${newTodo.title} to the database!`)
})

todoRouter.delete("/:todoId", (req,res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send("Succesfully deleted Todo")
})

todoRouter.put("/:todoId", (req,res) => {
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(updatedTodo)
})




module.exports = todoRouter