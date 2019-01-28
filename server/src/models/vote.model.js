const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VoteSchema = new Schema({
  voteTypeId: Number,
  BountyAmount: Number,
  createAt: Date,
  _post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Vote = mongoose.model('Vote', VoteSchema)
module.exports = Vote
