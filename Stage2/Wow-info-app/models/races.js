const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subSchema = new Schema({
    name: String
});

const raceSchema = new Schema({
    race:[subSchema]
});

module.exports = mongoose.model ('Race', raceSchema)