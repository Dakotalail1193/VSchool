const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))


app.use("/bounties", require("./Routes/bountyRouter.js"))




app.listen(8000, ()=> {
    console.log("Server is running on port 8000")
})