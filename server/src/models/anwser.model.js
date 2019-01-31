const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnwserSchema = new Schema({
    content: String,
    createdDate: Date,
    editDate: Date,
    _comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    _vote: {
        type: Schema.Types.ObjectId,
        ref: 'Vote'
    }
})

const Anwser = mongoose.model('Anwser', AnwserSchema)
module.exports = Anwser
