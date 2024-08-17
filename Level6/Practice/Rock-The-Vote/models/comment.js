const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentScehma = new Schema({
    comment:{
        type: String,
        required: true
    },
    username:{
        type: String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },    
    issueId:{
        type: Schema.Types.ObjectId,
        ref:"Issue"
    }
})

module.exports = mongoose.model("Comment", commentScehma)