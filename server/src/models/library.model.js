const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibrarySchema = new Schema({
    name: String,
    type: String,
    image: String
})

const Library = mongoose.model('Library', LibrarySchema)
module.exports = Library