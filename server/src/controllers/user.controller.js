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
    if (!validationResult.success) return res.status(403).json(JsonResponse('', 403, validationResult.errors, true));
    const foundUserEmail = await User.findOne({email});
    if (foundUserEmail) return res.status(404).json(JsonResponse('', 404, 'Tài khoản email đã tồn tại!', true));
    const foundUserUsername = await User.findOne({userid});
    if (foundUserUsername) return res.status(404).json(JsonResponse('', 404, 'Tài khoản đã tồn tại!', true));
    const newUser = await new User(req.value.body);
    await newUser.save();
    const sessionToken = await signToken(newUser);
    res.cookie('sid', sessionToken, option);
    res.status(200).json(JsonResponse({
      _id: newUser._id,
      email: newUser.email,
      token: sessionToken
    }, 200, "Đăng ký thành công!", false));
  },

  /**
   * Login Local Using Passport Middleware By User
   * @param req
   * @param res
   */
  signIn: async (req, res) => {
    // Generate the token
    const foundUser = await User.findById(req.user._id).select('-password');
    const sessionToken = await signToken(req.user);
    res.cookie('sid', sessionToken);
    res.status(200).json(JsonResponse({token: sessionToken, user: foundUser}, 200, "Đăng nhập thành công!", false));
  },

  /**
   * Get User (Query can get one data)
   * @param req
   * @param res
   */
  index: async (req, res) => {
    const {query} = req;
    const include = [];
    forEach(split(query._includes, ','), i => {
      if (includes[i]) include.push(includes[i])
    });
    const dataFound = await User.find(omit(query, ['_includes'])).select('-password').populate(include);
    if (!dataFound) return res.status(403).json(JsonResponse('', 403, 'Không có dữ liệu được tìm thấy!'));
    res.status(200).json(JsonResponse(dataFound, 200, 'Lấy dữ liệu thành công!', false));
  },

  /**
   * Update User (Note: Have to cookie['Authorization']
   * @param req
   * @param res
   */
  update: async (req, res) => {
    const {body, params, query} = req;
    if (!query._userId) return res.status(405).json(JsonResponse("", 405, "Vui lòng xác thực quyền người dùng! :)", true));
    const foundUser = await User.findById(params.userId);
    if (!foundUser) return res.status(403).json(JsonResponse('', 403, 'Tài khoản này không tồn tại!', true));
    if (query._userId != foundUser._id) return res.status(403).json(JsonResponse("", 403, "Vui lòng xác thực danh tính! :)", true));
    const dataUserUpdated = await User.findByIdAndUpdate(params.userId, {$set: body}, {new:true}).select('-password');
    res.status(201).json(JsonResponse(dataUserUpdated, 201, "Cập nhật dữ liệu thành công!", false));
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
