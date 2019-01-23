const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  parent: String,
  score: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  body: String,
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  lastEditDate: {
    type: Date,
    default: Date.now()
  },
  lastActivityDate: {
    type: Date,
    default: Date.now()
  },
  title: String,
  _tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  answerCount: {
    type: Number,
    default: 0
  },
  commentCount: {
    type: Number,
    default: 0
  },
  FavoriteCount: {
    type: Number,
    default: 0
  },
  closedDate: {
    type: Date,
    default: Date.now()
  }
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post
