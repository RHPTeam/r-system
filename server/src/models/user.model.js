const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userid: String,
    email: String,
    password: String,
    name: String,
    nameDisplay: String,
    location: String,
    avatar: String,
    title: String,
    about: String,
    social: {
        wesite: String,
        stack: String,
        github: String
    },
    career: {
        type: String,
        content: String
    },
    story: {
        info: String,
        skill: String,
        exp: [{
            title: String,
            content: String,
            currentWork: Number,
            startAt: Date,
            startEnd: Date
        }]
    },
    _notfications: [{
        type: Schema.Types.ObjectId,
        ref: 'Notification'
    }],
    _questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    _anwsers: [{
        type: Schema.Types.ObjectId,
        ref: 'Anwser'
    }],
    _reputation: {
        type: Schema.Types.ObjectId,
        ref: 'Reputation'
    },
    _permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }],
    _ranks: {
        type: Schema.Types.ObjectId,
        ref: 'Rank'
    },
    _favorities: [{
        type: Schema.Types.ObjectId,
        ref: 'Favorite'
    }]
})

const User = mongoose.model('User', UserSchema)
module.exports = User