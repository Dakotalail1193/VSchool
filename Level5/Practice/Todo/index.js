const express = require('express')
const app = express()


app.use(express.json())



app.use("/", require("./routes/todoRouter.js"))



app.listen(5000, () =>{
    console.log("Server is Running on Port 5000")
})