const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibrarySchema = new Schema({
    type: String,
    _posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    _library: [{
        type: Schema.Types.ObjectId,
        ref: 'Library'
    }]
})

const Library = mongoose.model('Library', LibrarySchema)
module.exports = Library