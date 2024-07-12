const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const Movie = require('../models/movie')

const movies = [
    {title:"Die Hard", genre:"Action", _id: uuidv4()},
    {title:"Lion King", genre:"Fantasy", _id: uuidv4()},
    {title:"Godzilla (1954)", genre:"Action", _id: uuidv4()},
    {title: "Friday the 13th", genre:"Horror", _id: uuidv4()},
    {title:"Hot Fuzz", genre:"Action", _id: uuidv4()}
]



movieRouter.get("/", async(req, res, next)=>{
    try {
        const foundmovies = await Movie.find()
        return res.status(200).send(foundmovies)
    } catch (err) {
        res.status(500)
        return next(err)
    }  
    })

// movieRouter.get("/:movieId", (req,res, next) => {
//   const movieId = req.params.movieId
//   const foundMovie = movies.find( movie => movie._id === movieId)
//   if(!foundMovie){
//     const error = new Error(`The item with id ${movieId} was not found`)
//     res.status(500)
//     return next(error)
//   }
//   res.status(200).send(foundMovie)
// })


movieRouter.get("/genre", async (req, res, next) =>{
    try {
        const foundMovies = await Movie.find({genre: req.query.genre})
        return res.status(200).send(foundMovies)
    } catch (error) {
        res.status(500)
        return next(error)
    }
 })


    
movieRouter.post("/", async(req, res, next) => {
    try {
        const newMovie = new Movie(req.body)
        const savedMovie = await newMovie.save()
        return res.status(201).send(savedMovie)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

movieRouter.delete("/:movieId", async (req, res, next) => {
    try {
        const movieId = req.params.movieId
        const deletedMovie = await Movie.findByIdAndDelete(movieId)
        return res.status(200).send(`You have succesfully deleted ${deletedMovie.title}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

movieRouter.put("/:movieId", async (req, res, next) => {
    try {
        const movieId = req.params.movieId
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            req.body,
            {new: true}
        )
        return res.status(200).send(updatedMovie)
    } catch (error) {
        res.status(500)
        return next(error)
    }

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