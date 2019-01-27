const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    name: String,
    content: String,
    status: Boolean,
    createdDate: Date,
    editDate: Date,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    _anwsers: [{
        type: Schema.Types.ObjectId,
        ref: 'Anwser'
    }],
    _vote: {
        type: Schema.Types.ObjectId,
        ref: 'Vote'
    }
})

QuestionSchema.methods = {
    // check tag
    tag: function (id) {
      if (this._tags.indexOf(id) === -1) {
        this._tags.push(id);
      }
  
      return this.save();
    },
    unTag: function (id) {
      this._tags.remove(id);
      return this.save();
    },
    isTag: function (id) {
      return this._tags.some(tagId => {
        return tagId.toString() === id.toString();
      });
    },
  
    // check anwser
    anwser: function (id) {
      if (this._anwsers.indexOf(id) === -1) {
        this._anwsers.push(id);
      }
  
      return this.save();
    },
    unAnwser: function (id) {
      this._anwsers.remove(id);
      return this.save();
    },
    isAnwser: function (id) {
      return this._anwsers.some(anwserId => {
        return anwserId.toString() === id.toString();
      });
    },
  }

const Question = mongoose.model('Question', QuestionSchema)
module.exports = Question
