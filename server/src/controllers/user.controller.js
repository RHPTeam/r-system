/**
 * create controller users for project
 * author: quangnc
 * date up: 08/01/2019
 * date to: 11/01/2019
 * team: BE-RHP
 */

const passport = require('passport')
const omit = require('lodash/omit')
const split = require('lodash/split')
const forEach = require('lodash/forEach')

const config = require('../configs/config');
const User = require('../models/user.model')

const JsonResponse = require('../helpers/json-response')
const validateUser = require('../validator/user')
const JWT = require('jsonwebtoken');

const includes = {
  notifications: 'notifications',
  questions: 'questions',
  anwsers: 'anwsers',
  reputation: 'reputation',
  permissions: 'permissions',
  ranks: 'ranks',
  favorities: 'favorities'
};

// set one cookie
const option = {
  maxAge: 1000 * 60 * 60 * 24, // would expire after 1 days
  httpOnly: true, // The cookie only accessible by the web server
  signed: true, // Indicates if the cookie should be signed
  secure: true
};

signToken = user => {
  return JWT.sign({
    iss: 'RHPTeam',
    sub: user._id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, config.JWT_SECRET);
};

module.exports = {

  /**
   * Register By User
   * @param req
   * @param res
   */
  signUp: async (req, res) => {
    const {userid, email} = req.value.body;
    const validationResult = await validateUser.createUser(req.body);
    if (!validationResult.success) return res.status(403).json(JsonResponse('', 403, validationResult.errors, false));
    const foundUserEmail = await User.findOne({ email });
    if (foundUserEmail) return res.status(404).json(JsonResponse('', 404, 'Tài khoản email đã tồn tại!', false));
    const foundUserUsername = await User.findOne({ userid });
    if (foundUserUsername) return res.status(404).json(JsonResponse('', 404, 'Tài khoản đã tồn tại!', false));
    const newUser = await new User(req.value.body);
    await newUser.save();
    const sessionToken = await signToken(newUser);
    res.cookie('sid', sessionToken, option);
    res.status(200).json(JsonResponse({_id: newUser._id, email: newUser.email, token: sessionToken}, 200, "Đăng ký thành công!", false));
  },

  /**
   * Login Local Using Passport Middleware By User
   * @param req
   * @param res
   */
  signIn: async (req, res) => {
    // Generate the token
    const sessionToken = await signToken(req.user);
    res.cookie('sid', sessionToken);
    res.status(200).json(JsonResponse({ token: sessionToken }, 200, "Đăng nhập thành công!", false));
  },

  /**
   * Get all user
   * @param req
   * @param res
   * @param next
   */
  getAllUsers: async (req, res, next) => {
    try {
      const {
        query,
      } = req
      const include = []
      forEach(split(query._includes, ','), i => {
        if (includes[i]) {
          include.push(includes[i])
        }
      })

      return await User.find(omit(query, ['_includes']))
        .select('_id userid name nameDisplay email avatar title about ')
        .populate(include)
        .exec((errors, data) => {
          if (errors) {
            return res.json(JsonResponse('', 401, errors, false))
          }
          return res.json(JsonResponse(data, 200, '', false))
        })
    } catch (error) {
      next(error)
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
      return res.json(JsonResponse(req.user, 200, '', false))
    } catch (error) {
      next(error)
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
      const {
        user,
        body
      } = req

      const findUser = await User.find()
        .or([{
          email: body.email
        },
          {
            nameDisplay: body.nameDisplay
          }
        ])
      if (findUser.length > 1) {
        return res.json(JsonResponse('', 404, 'Email or nameDisplay is exist', false))
      }
      return await user.updateOne(body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse('', 404, errors, false))
        }
        res.json(JsonResponse('', 200, `update user success`, false))
      })
    } catch (error) {
      next(error)
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
      return await req.user.remove(err => {
        if (err) {
          res.json(JsonResponse('', 404, errors, false))
        }
        res.send(JsonResponse('', 200, `Delete user ${req.user.name} success`, false))
      })
    } catch (error) {
      next(error)
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
        .select('_id userid name nameDisplay email avatar title about _permissions')
        .populate(`_${req.query._includes}`)
        .exec()
      if (!user) {
        return res.json(JsonResponse('', 404, `User not found`, false))
      }
      req.user = user
      next()
    } catch (error) {
      next(error)
    }
  },

  /**
   * Secret for unlock key token
   * @param req
   * @param res
   */
  secret: (req, res) => {
    res.status(200).json(JsonResponse("resources!", 200, "Authorization successfully!", false));
  }
}
