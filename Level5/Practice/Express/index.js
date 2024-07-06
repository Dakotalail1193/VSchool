const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())






app.use("/movies", require("./routes/moviesRouter.js"))

app.use("/tvShows", require("./routes/tvShowsRouter.js"))


app.listen(9000, ()=> {
    console.log("server is running on Port 9000")
})