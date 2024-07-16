const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName:{
        type: String,
        required: true
        
    },
    lastName:{
        type: String,
        required: true
        
    },
    isLiving:{
        type: Boolean,
        required: true,
        unique: false
    },
    bountyAmount:{
        type: Number,
        required: true,
        unique: false
    },
    type:{
        type: String,
        required: true,
        unique: false,
        sparse: true        
    }
})

module.exports = mongoose.model("Bounty", bountySchema)