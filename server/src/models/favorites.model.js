const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavoriteSchema = new Schema({
    _question: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    _anwser:[{
        type: Schema.Types.ObjectId,
        ref: 'Anwser'
    }],
    _tag: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Favorite = mongoose.model('Favorite', FavoriteSchema)
module.exports = Favorite