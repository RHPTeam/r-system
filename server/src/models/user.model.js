
const mongoose = require('mongoose')
const bcrypt   = require('bcrypt');

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
  _notfications: [{
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
  _favorite: [{
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
  }]
})

// compare code password
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

// bcrypt code password
UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
      return next();
  }

  bcrypt.genSalt((saltError, salt) => {
      if (saltError) {
      return next(saltError);
      }

      bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
          return next(hashError);
      }
      user.password = hash;
      return next();
      });
  });
});



const User = mongoose.model('User', UserSchema)
module.exports = User