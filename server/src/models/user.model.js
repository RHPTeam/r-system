const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

//define model user
const UserSchema = new Schema({
  userid: String,
  email: String,
  password: String,
  name: String,
  nameDisplay: String,
  location: String,
  avatar: String,
  title: String,
  about: String,
  social: {
    website: String,
    stack: String,
    github: String
  },
  career: {
    type: String,
    content: String
  },
  createdAt: Date,
  story: {
    info: String,
    skill: String,
    exp: [{
      title: String,
      content: String,
      currentWork: Number,
      startAt: Date,
      startEnd: Date
    }]
  },
  _postList: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  _tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  _notifications: [{
    type: Schema.Types.ObjectId,
    ref: 'Notification'
  }],
  _questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }],
  _anwsers: [{
    type: Schema.Types.ObjectId,
    ref: 'Anwser'
  }],
  _reputation: {
    type: Schema.Types.ObjectId,
    ref: 'Reputation'
  },
  _permissions: [{
    type: Schema.Types.ObjectId,
    ref: 'Permission'
  }],
  _ranks: {
    type: Schema.Types.ObjectId,
    ref: 'Rank'
  },
  _favorities: [{
    type: Schema.Types.ObjectId,
    ref: 'Favorite'
  }],
  _blogs: [{
    type: Schema.Types.ObjectId,
    ref: 'Blog'
  }],
  _comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  _jobs: [{
    type: Schema.Types.ObjectId,
    ref: 'Job'
  }],
  _votes: [{
    type: Schema.Types.ObjectId,
    ref: 'Vote'
  }]
});


UserSchema.pre('save', async function (next) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // hash password. Note: Using function normal not use arrow function (error: this.password)
    const passwordHashed = await bcrypt.hash(this.password, salt);
    this.password = passwordHashed;
    next();
  } catch (e) {
    next(e);
  }
});

UserSchema.methods.isValidPassword = async function (newPassword) {
  try {
    // Return value boolean to compare password by package
    return await bcrypt.compare(newPassword, this.password);
  } catch (e) {
    throw new Error(e);
  }
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
