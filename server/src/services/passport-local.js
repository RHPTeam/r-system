/**
 * create passport local
 * @param asset-token
 */

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const config = require('../configs/config');
const User = require('../models/user.model');

// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.JWT_SECRET
}, async (payload, done) => {
  try {
    // Find the user specified in token
    const user = await User.findById(payload.sub);
    // If user doesn't exists, handle it
    if (!user) {
      return done(null, false)
    }
    // otherwise, return the user
    done(null, user)
  } catch (e) {
    done(e, false)
  }
}));

// LOCAL STRATEGY
passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    // Find the user given the email
    const user = await User.findOne({email});
    // If not, handle it
    if (!user) {
      return done(null, false)
    }
    // Check if the password is correct
    const isMatch = await user.isValidPassword(password);
    // If not, handle it
    if (!isMatch) {
      return done(null, false)
    }
    // otherwise, return the user
    done(null, user);
  } catch (e) {
    done(e, false);
  }
}));

// TELL PASSPORT.JS HOW TO HANDLE A GIVEN USER OBJECT
passport.serializeUser((user, done) => {
  done(null, user);
});

// HANDLE IT WHEN A USER MAKES A REQUEST FOR A SECURED URL
passport.deserializeUser((id, done) => {
  let user = User.find((user) => {
    return user.id === id;
  });
  done(null, user);
});
















































//
// /**
//  * Return the Passport Local Strategy object.
//  */
//
// module.exports = passport => {
//   passport.use('local-login',
//     new PassportLocalStrategy({
//       usernameField: 'email',
//       passwordField: 'password',
//       session: false,
//       passReqToCallback: true
//     }, (req, email, password, done) => {
//       const userData = {
//         email: email.trim(),
//         password: password.trim()
//       };
//
//       // find a user by email address
//       return User.findOne({email: userData.email}, (err, user) => {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           const error = new Error('Incorrect email or password');
//           error.name = 'IncorrectCredentialsError';
//
//           return done(error);
//         }
//         // check if a hashed user's password is equal to a value saved in the database
//         return user.comparePassword(userData.password, (passwordErr, isMatch) => {
//           if (err) {
//             return done(err);
//           }
//
//           if (!isMatch) {
//             const error = new Error('Incorrect email or password');
//             error.name = 'IncorrectCredentialsError';
//
//             return done(error);
//           }
//
//           const payload = {
//             sub: user._id
//           };
//
//           // create a token string
//           const token = jwt.sign(payload, config.JWT_SECRET, {expiresIn: "1h"});
//           const data = {
//             _id: user._id,
//             email: user.email,
//             nameDisplay: user.nameDisplay,
//             name: user.name,
//           };
//
//           return done(null, token, data);
//         });
//       });
//     })
//   );
//
//   passport.serializeUser((user, done) => {
//     done(null, user._id);
//   });
//
//   passport.deserializeUser((id, done) => {
//     User.findById(_id, (err, user) => {
//       done(err, user);
//     });
//   });
// }
