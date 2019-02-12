const jwt = require('jsonwebtoken');

const JsonResponse = require('../helpers/json-response')
const User = require('../models/user.model');
const config = require('../configs/config');

/**
 *  The Auth Checker middleware function.
 */

module.exports = (req, res, next) => {
  if (!req.headers.authorization) return res.status(404).json(JsonResponse('', 404, 'Not Found Your Cookie!', false));
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization;
  // decode the token using a secret key-phrase
  return jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) return res.status(401).end();
    const userId = decoded.sub;
    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) return res.status(401).end();
      return next();
    });
  });
};
