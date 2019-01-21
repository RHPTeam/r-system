const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    content: String,
    _blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    _anwser: {
        type: Schema.Types.ObjectId,
        ref: 'Anwser'
    }
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment