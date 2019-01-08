const validator = require('validator');
const passport = require('passport');

const User = require('../models/user.model');

// validate form data 
validateMemberForm = async payload => {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0 || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'Email is require';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 6) {
      isFormValid = false;
      errors.password = 'Password is require';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.name = 'User name is require';
  }

  if (!payload || typeof payload.nameDisplay !== 'string' ) {
      isFormValid = false;
      errors.nameDisplay = 'Name display is require';
  }

  if (!isFormValid) {
      message = 'Xảy ra sự cố thông tin bạn cung cấp.';
  }

  return {
      success: isFormValid,
      message,
      errors
  };
}

const findUserEmailOrName = async data => {
  try {
    return await User.find()
              .or([
                {email: data.email}, 
                {nameDisplay: data.nameDisplay}
              ]) 
              .exec();
  } catch (error) {
    
  }
}

module.exports = {
  /**
   * Create one user
   * @param req
   * @param res
   * @param next
   */
  createUser: async (req, res, next) => {
    try {
      const list_user = req.body;
      const validationResult = await validateMemberForm(list_user);
      if (!validationResult.success) {
        return res.json({
          success: false,
          message: validationResult.message,
          errors: validationResult.errors
        });
      }
      //check email or nameDisplay exist
      if (findUserEmailOrName(list_user).length > 0) {
        return res.json({
          status: 404
        })
      }

      const user = await new User(list_user);
      user.save((err, data)=> {
        if(err) {
          return res.json({
            success: false,
            message: "Email hoạc là username đã được đăng ký."
          });
        }
        return res.json({
          success: true,
          message: "create user success"
        });
      })
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * Get all user
   * @param req
   * @param res
   * @param next
   */
  getAllUsers: async (req, res, next) => {
    try {
      return await User.find()
                        .select('_id userid name nameDisplay email avatar title about ')
                        .exec((errors, data) => {
                          if (errors) {
                            res.json({
                              error: errors
                            })
                          }
                          res.json({
                            data: data
                          })
                        });
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * get one user
   * @param req
   * @param res
   * @param next
   */
  getOneUser: async (req, res, next) => {
    try {
      return res.json(req.user);
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * update user by id
   * @param req
   * @param res
   * @param next
   */
  updateUser: async (req, res, next) => {
    try {
      const { user, body } = req;
      if (findUserEmailOrName(body).length > 0) {
        return res.json({
          status: 404
        })
      }
      return await User.findByIdAndUpdate({_id: user._id}, body, (errors, data) => {
        console.log(data);
        if (errors) {
          res.json({
            error: errors
          })
        }
        res.json({
          data: data
        })
      })
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * delete user by id 
   * @param req
   * @param res
   * @param next
   */
  deleteUser: async (req, res, next) => {
    try {
      const { user } = req;
      return await User.findByIdAndDelete({_id: user._id}, (errors, data) => {
        if (errors) {
          res.json({
            error: errors
          })
        }
        res.send({
          success: 'success'
        })
      })
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Get user by id
   * @param req
   * @param res
   * @param next
   * @param id 
   */
  getByIdUser: async (req, res, next, id) => {
    try {
      const user = await User.findById({_id: id});
      if (!user) {
        return res.json({
          success: false,
          message: "User doesn't exit"
        });
      }
      req.user = user;
      next();
    } catch (error) {
      
    }
  },

  /**
   * Login local use email vs password
   * @param req
   * @param res
   * @param next
   */
  loginUser: (req, res, next) => {
    return passport.authenticate('local-login', (err, token, data) => {
      if (err) {
          return res.status(403).json(err);
      }
      return res.json({
          token,
          data
      });
    })(req, res, next);
  },

  logoutUser: (req, res) => {
    req.logout();
  }

}