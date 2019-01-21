/**
 * create controller users for project
 * author: quangnc
 * date up: 08/01/2019
 * date to: 11/01/2019
 * team: BE-RHP
 */
const validator = require('validator');
const passport = require('passport');
//const joi = require('joi');
const User = require('../models/user.model');
const JsonResponse = require('../helpers/json-response')

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

  if (!payload || typeof payload.nameDisplay !== 'string') {
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
      .or([{
          email: data.email
        },
        {
          nameDisplay: data.nameDisplay
        }
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
        return res.json(JsonResponse("", 403, validationResult.errors, false))
      }
      //check email or nameDisplay exist
      if (findUserEmailOrName(list_user).length > 0) {
        return res.json(JsonResponse("", 404, "Email or nameDisplay is exist", false))
      }

      const user = await new User(list_user);
      user.save(err => {
        if (err) {
          return res.json(JsonResponse("", 404, "Email or nameDisplay is exist.", false));
        }
        return res.json(JsonResponse("", 200, "create user success", false))
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
            return res.json(JsonResponse("", 401, errors, false))
          }
          return res.json(JsonResponse(data, 200, "", false))
        });
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * get one user
   * @param req
   * @param res
   */
  getOneUser: async (req, res) => {
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
   */
  updateUser: async (req, res) => {
    try {
      const {
        user,
        body
      } = req;
      if (findUserEmailOrName(body).length > 1) {
        return res.json(JsonResponse("", 404, "Email or nameDisplay is exist", false))
      }
      return await User.findByIdAndUpdate({
        _id: user._id
      }, body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse(data, 200, "", false))
      })
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * delete user by id 
   * @param req
   * @param res
   */
  deleteUser: async (req, res) => {
    try {
      const {
        user
      } = req;
      return await User.findByIdAndRemove({
        _id: user._id
      }, (errors, data) => {
        if (errors) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete user ${user.name} success`, false))
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
      const user = await User.findById({
          _id: id
        })
        .select('_id userid name nameDisplay email avatar title about ')
        .exec();
      if (!user) {
        return res.json(JsonResponse("", 404, `User not found`, false));
      }
      req.user = user;
      next();
    } catch (error) {
      console.log(error)
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
        return res.json(JsonResponse("", 403, err, false))
      }
      return res.json(JsonResponse({
        token,
        data
      }, 200, "", false))
    })(req, res, next);
  },

  /**
   * Check user is Login, if not login redirect to login
   * @param req
   * @param res
   */
  isLogin: (req, res) => {
    req.end();
  },

  /**
   * Login local use email vs password
   * @param req
   * @param res
   */
  logoutUser: (req, res) => {
    req.logout();
  },
}
