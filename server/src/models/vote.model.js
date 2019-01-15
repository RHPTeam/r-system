const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VoteSchema = new Schema({
    voteUp: Number,
    voteDown: Number,
    voteResolved: Boolean,
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

const Vote = mongoose.model('Vote', VoteSchema)
module.exports = Vote