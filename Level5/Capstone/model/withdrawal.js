const mongoose = require('mongoose')
const Schema = mongoose.Schema

const withdrawalSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },
    withdrawal:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Withdrawal", withdrawalSchema)