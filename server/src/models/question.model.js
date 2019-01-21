const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    name: String,
    content: String,
    status: Boolean,
    createdDate: Date,
    editDate: Date,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    _anwsers: [{
        type: Schema.Types.ObjectId,
        ref: 'Anwser'
    }],
    _vote: {
        type: Schema.Types.ObjectId,
        ref: 'Vote'
    }
})

const Question = mongoose.model('Question', QuestionSchema)
module.exports = Question