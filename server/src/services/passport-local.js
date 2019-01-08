/**
 * create passport local
 * @param asset-token
 */

const jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../configs/config');
const User = require('../models/user.model');

/**
 * Return the Passport Local Strategy object.
 */

module.exports = passport => {
  passport.use('local-login',
    new PassportLocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      session: false,
      passReqToCallback: true
    }, (req, email, password, done) => {
      const userData = {
        email: email.trim(),
        password: password.trim()
      };
    
      // find a user by email address
      return User.findOne({ email: userData.email }, (err, user) => {
        if (err) { return done(err); }
    
        if (!user) {
          const error = new Error('Incorrect email or password');
          error.name = 'IncorrectCredentialsError';
    
          return done(error);
        }
    
        // check if a hashed user's password is equal to a value saved in the database
        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
          if (err) { return done(err); }
    
          if (!isMatch) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';
    
            return done(error);
          }
    
          const payload = {
            sub: user._id
          };
    
          // create a token string
          const token = jwt.sign(payload, config.JWT_SECRET, {expiresIn: "1h"});
          const data = {
            email: user.email,
            nameDisplay: user.nameDisplay,
            name: user.name,
          };
    
          return done(null, token, data);
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(_id, (err, user) => {
      done(err, user);
    });
  });
}
