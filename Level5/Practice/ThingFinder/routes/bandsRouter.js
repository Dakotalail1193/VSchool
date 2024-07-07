const express = require('express')
const bandsRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const movieRouter = require('../../Express/routes/moviesRouter')

const bands = [
    {name:"The Wonder Years", genre:"alternative", _id:uuidv4()},
    {name:"Spanish Love Songs", genre:"pop punk", _id:uuidv4()},
    {name:"Hot Mulligan", genre:"rock", _id:uuidv4()}
]

bandsRouter.get("/", (req,res) => {
res.send(bands)
})

bandsRouter.get("/search/name", (req,res) => {
 const name= req.query.name  
 const filteredByName = bands.filter(bands => bands.name === name)
 res.send(filteredByName)
})


bandsRouter.get("/search/genre", (req,res)=> {
const genre = req.query.genre
const filteredByGenre = bands.filter(bands => bands.genre === genre)
res.send(filteredByGenre)
})


module.exports = bandsRouter