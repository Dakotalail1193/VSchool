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
    res.status(200)
    res.send(movies)
    })

movieRouter.get("/:movieId", (req,res, next) => {
  const movieId = req.params.movieId
  const foundMovie = movies.find( movie => movie._id === movieId)
  if(!foundMovie){
    const error = new Error(`The item with id ${movieId} was not found`)
    res.status(500)
    return next(error)
  }
  res.status(200).send(foundMovie)
})


movieRouter.get("/search/genre", (req, res, next) =>{
 const genre = req.query.genre
 if(!genre){
    const error = new Error("You must provide a genre")
    res.status(500)
    return next(error)
 }
 const filteredMovies = movies.filter(movie => movie.genre === genre)
 res.status(200).send(filteredMovies)
})


    
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()    
    movies.push(newMovie)
    res.status(201).send(newMovie)
})

movieRouter.delete("/:movieId", (req,res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.status(200).send("Succesfully deleted Movie")
})

movieRouter.put("/:movieId", (req,res) => {
    const movieId = req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)
    res.status(201).send(updatedMovie)
})






// movieRouter.get("/", (req, res)=>{
//     res.send(movies)
//     })
    
// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()    
//     movies.push(newMovie)
//     res.send(`Succesfully added ${newMovie.title} to the database!`)
// })










module.exports = movieRouter