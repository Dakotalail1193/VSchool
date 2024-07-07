const express = require("express")
const app = express()

app.use(express.json())

app.use("/cities", require ("./citiesRouter.js"))








app.listen(4000, () => {
    console.log("Server is Running on Port 4000")
})