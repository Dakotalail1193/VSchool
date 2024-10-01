const mongoose = require('mongoose')
const Schema = mongoose.Schema

const allianceSchema = new Schema ({
    race: {
        type: String
    }
}) 

module.exports = mongoose.model('Alliance', allianceSchema) 