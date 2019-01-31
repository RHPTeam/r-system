const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RankSchema = new Schema({
    name: String,
    _user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Rank = mongoose.model('Rank', RankSchema)
module.exports = Rank