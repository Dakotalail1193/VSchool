const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentScehma = new Schema({
    comment:{
        type: String,
        required: true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    username:{
        type: String
    },
    issueId:{
        type: Schema.Types.ObjectId,
        ref:"Issue"
    }
})

module.exports = mongoose.model("Comment", commentScehma)