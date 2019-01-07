const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavoriteSchema = new Schema({
    _question: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Favorite = mongoose.model('Favorite', FavoriteSchema)
module.exports = Favorite