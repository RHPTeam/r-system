const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  parent: String,
  score: Number,
  views: Number,
  answerCount: Number,
  commentCount: Number,
  FavoriteCount: Number,
  closedDate: Date,
  createAt: Date,
  lastEditDate: Date,
  lastActivityDate: Date,
  _votes: [{
    type: Schema.Types.ObjectId,
    ref: 'Vote'
  }],
  _tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
