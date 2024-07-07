const express = require('express')
const app = express()


app.use(express.json())

app.use("/movies", require("./routes/moviesRouter.js"))

app.use("/tvShows", require("./routes/tvShowsRouter.js"))


//app.use("/items", (req, res, next) => {
//console.log("")
// needs a next() or a res.send() 
// })


app.listen(9000, ()=> {
    console.log("server is running on Port 9000")
})