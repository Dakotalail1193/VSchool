const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hordeSchema = new Schema ({
    race: {
        type: String
    }
}) 

module.exports = mongoose.model('Horde', hordeSchema) 