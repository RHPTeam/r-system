const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagSchema = new Schema({
    name: String,
    desc: String,
    _question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }
})

const Tag = mongoose.model('Tag', TagSchema)
module.exports = Tag