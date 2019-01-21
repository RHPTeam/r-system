const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReputationSchema = new Schema({
    score:{type:Number, default: 40},
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Reputation = mongoose.model('Reputation', ReputationSchema)
module.exports = Reputation