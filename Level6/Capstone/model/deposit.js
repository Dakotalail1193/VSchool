const mongoose = require('mongoose')
const Schema = mongoose.Schema

const depositSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    deposit: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Deposit", depositSchema)



