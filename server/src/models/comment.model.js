const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    content: String,
    parrent: Number,
    _post: {
        type: Schema.Types.ObjectId
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment