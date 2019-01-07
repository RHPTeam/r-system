const User = require('../models/user');
const NotFound = require('../helper/not-found');
module.exports = {
  /**
   * Create user
   * @param req
   * @param res
   * @param next
   */
  createUser: (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) { 
      throw new NotFound('Email is required.', 400); 
    }
    const createUser = new User({ email, password });
  
    return User.findOne({ email })
      .then(user => {
        if (user) {
          throw new NotFound('User\'s exist ', 409);
        }
        createUser.save();
        return res.json({
          data: user,
          status: 200,
          message:"Register Successfully"
        });
      });
  },

  /**
   * Get All user 
   * @param req
   * @param res
   * @param next
   */
  getAllUsers: (req, res, next) => {
    User.find()
      .select('_id role email password')
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          users: docs.map(doc => {
            return {
              _id: doc._id,
              role:doc.role,
              email: doc.email,
              password: doc.password,
            }
          })

        }
        return res.json({
          data: response,
          status: 200,
          message: ""
        })
      }).catch(err => {
        console.log(err);
        res.json({
          data: [],
          status: 500,
          message: err
        })
      });
  }, 
}