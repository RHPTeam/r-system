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
    website: {
      type: String,
      default: '',
    },
    twitter: {
      type: String,
      default: '',
    },
    github: {
      type: String,
      default: '',
    }
  },
  career: {
    type: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    }
  },
  createdAt: Date,
  story: {
    info: {
      type: String,
      default: '',
    },
    skill: {
      type: String,
      default: '',
    },
    exp: [{
      title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
      currentWork: {
        type: Number,
        default: 0,
      },
      startAt: {
        type: Date,
        default: '',
      },
      startEnd: {
        type: Date,
        default: '',
      }
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
}, {minimize: false});


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
