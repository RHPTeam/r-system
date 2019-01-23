const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagSchema = new Schema({
    name: String,
    _wiki: {
      type: Schema.Types.ObjectId,
      ref: 'Wiki'
    },
    _postList: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;
