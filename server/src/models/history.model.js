const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HistorySchema = new Schema({
  name: String,
  _user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

const History = mongoose.model('History', HistorySchema)
module.exports = History
