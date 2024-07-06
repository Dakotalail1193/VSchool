const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const movies = [
    {title:"Die Hard", genre:"Action", _id: uuidv4()},
    {title:"Lion King", genre:"Fantasy", _id: uuidv4()},
    {title:"Godzilla (1954)", genre:"Action", _id: uuidv4()},
    {title: "Friday the 13th", genre:"Horror", _id: uuidv4()},
    {title:"Hot Fuzz", genre:"Action", _id: uuidv4()}
]

movieRouter.get("/", (req, res)=>{
    res.send(movies)
    })
    
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()    
    movies.push(newMovie)
    res.send(`Succesfully added ${newMovie.title} to the database!`)
})










module.exports = movieRouter