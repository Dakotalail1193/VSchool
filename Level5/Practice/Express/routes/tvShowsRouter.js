const express = require('express')
const tvShowRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const tvShows =[
    {title: "Justified", _id:uuidv4()},
    {title: "The Sopranos", _id:uuidv4()}, 
    {title: "Game of Thrones", _id:uuidv4()}, 
    {title: "Ted Lasso", _id:uuidv4()}  
] 

tvShowRouter.get("/", (req, res)=>{
    res.send(tvShows)
})
        
tvShowRouter.post("/", (req, res) => {
    const newTvShow = req.body
    newTvShow._id = uuidv4()    
    tvShows.push(newTvShow)
    res.send(`Succesfully added ${newTvShow.title} to the database!`)
})

 

    module.exports = tvShowRouter