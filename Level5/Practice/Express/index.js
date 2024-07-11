const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))//logs requests to console


app.use("/movies", require("./routes/moviesRouter.js"))
app.use("/tvShows", require("./routes/tvShowsRouter.js"))




app.use((err, req, res, next, ) => {
console.log(err)
return res.send({errMsg: err.message})
})


app.listen(9000, ()=> {
    console.log("server is running on Port 9000")
})