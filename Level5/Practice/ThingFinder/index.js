const express = require('express')
const app = express()

app.use(express.json())

app.use("/bands", require("./routes/bandsRouter.js"))


app.listen(7254, () =>{
    console.log("Server is running on Port 7254")
})