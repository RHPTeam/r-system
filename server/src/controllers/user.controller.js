
/**
 * create controller users for project
 * author: quangnc
 * date up: 08/01/2019
 * date to: 11/01/2019
 * team: BE-RHP
 */

const passport = require('passport');
const omit = require('lodash/omit');
const split = require('lodash/split');
const forEach = require('lodash/forEach');

//const joi = require('joi');
const User = require('../models/user.model');
const Notification = require('../models/notification.model');
const Question = require('../models/question.model');
const Anwser = require('../models/anwser.model');
const Permission = require('../models/permission.model');
const Favoritie = require('../models/favorites.model');

const JsonResponse = require('../helpers/json-response')
const validateUser = require('../validator/user');

const includes = {
  notifications: "notifications",
  questions: "questions",
  anwsers: "anwsers",
  reputation: "reputation",
  permissions: "permissions",
  ranks: "ranks",
  favorities: "favorities"
}

module.exports = {
  /**
   * Create one user (Register)
   * @param req
   * @param res
   * @param next
   */
  createUser: async (req, res, next) => {
    try {
      const list_user = req.body;
      const validationResult = await validateUser.createUser(list_user);
      if (!validationResult.success) {
        return res.json(JsonResponse("", 403, validationResult.errors, false))
      }
      //check email or nameDisplay exist
      const findUser = await User.find()
        .or([{
            email: list_user.email
          },
          {
            nameDisplay: list_user.nameDisplay
          }
        ]);
      if (findUser.length > 0) {
        return res.json(JsonResponse("", 404, "Email or nameDisplay is exist", false))
      }
      list_user.created = new Date();
      const user = await new User(list_user);
      user.save(err => {
        if (err) {
          return res.json(JsonResponse("", 404, "Email or nameDisplay is exist.", false));
        }
        return res.json(JsonResponse("", 200, "created user successfully!", false))
      })
    } catch (error) {
      next(error)
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
      const {
        query,
      } = req;
      const include = []
      forEach(split(query._includes, ','), i => {
        if (includes[i]) {
          include.push(includes[i]);
        }
      });

      return await User.find(omit(query, ['_includes']))
        .select('_id userid name nameDisplay email avatar title about ')
        .populate(include)
        .exec((errors, data) => {
          if (errors) {
            return res.json(JsonResponse("", 401, errors, false))
          }
          return res.json(JsonResponse(data, 200, "", false))
        });
    } catch (error) {
      next(error);
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
      return res.json(JsonResponse(req.user, 200, "", false));
    } catch (error) {
      next(error);
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
      } = req;

      const findUser = await User.find()
        .or([{
            email: body.email
          },
          {
            nameDisplay: body.nameDisplay
          }
        ]);
      if (findUser.length > 1) {
        return res.json(JsonResponse("", 404, "Email or nameDisplay is exist", false))
      }
      return await user.updateOne(body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, `update user success`, false))
      })
    } catch (error) {
      next(error);
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
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete user ${req.user.name} success`, false))
      })
    } catch (error) {
      next(error);
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
        .exec();
      if (!user) {
        return res.json(JsonResponse("", 404, `User not found`, false));
      }
      req.user = user;
      next();
    } catch (error) {
      next(error);
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
    res.end();
  },

  /**
   * Login local use email vs password
   * @param req
   * @param res
   */
  logoutUser: (req, res) => {
    res.logout();
    res.end();
  },

  createUserPopulate: async (req, res, next) => {
    try {
      const {
        query
      } = req;
      const user = await User.findById(req.user._id);
      switch (query._includes) {
        case "notifications":
          const notification = await new Notification(req.body);
          notification._users = user;
          await notification.save();
          user._notifications.push(notification._id);
          break;
        case "questions":
          const question = await new Question(req.body);
          question._user = user;
          question.save();
          user._questions.push(question._id);
          break;
        case "anwsers":
          const anwser = await new Anwser(req.body);
          anwser._user = question;
          anwser.save();
          user._anwsers.push(anwser._id);
          break;
        case "permissions":
          const permission = await new Permission(req.body);
          permission._user = question;
          permission.save();
          user._permissions.push(permission._id);
          break;
        case "favorities":
          const favoritie = await new Favoritie(req.body);
          favoritie._user = question;
          favoritie.save();
          user._anwsers.push(favoritie._id);
          break;
        default:
          return res.json(JsonResponse("", 404, `error query`, false))
      }
      return await user.save((err, data) => {
        if (err) {
          return next(JsonResponse("", 404, `error`, false))
        }
        res.json(JsonResponse("", 200, "Create success", false))
      })
    } catch (error) {
      next(error)
    }
  },
  /**
   * localhost:8888/api/v1/questions/5c40cfa476ecf70d00fb1842/populate?_includes=tags&_id=5c40da73c30d5d0f3fecd6d9
   */
  deleteUserPopulate: async (req, res, next) => {
    try {
      const {
        query,
        user
      } = req;
      // kiem tra query co _includes and _id ?
      // ....

      switch (query._includes) {
        case "notifications":
          const checkNotification = await user._notifications && user._notifications.map(i => i._id.toString() === query._id.toString())
          if (!checkNotification) {
            return next(JsonResponse("", 404, `Notification not found in User`, false))
          }
          await user._notifications.remove(query._id);
          break;
        case "questions":
          const checkQuestion = await user._questions && user._questions.map(i => i._id.toString() === query._id.toString())
          if (!checkQuestion) {
            return next(JsonResponse("", 404, `Anwser not found in User`, false))
          }
          await user._questions.remove(query._id);
          break;
        case "anwsers":
          const checkAnwser = await user._anwsers && user._anwsers.map(i => i._id.toString() === query._id.toString())
          if (!checkAnwser) {
            return next(JsonResponse("", 404, `Anwser not found in Question`, false))
          }
          await user._anwsers.remove(query._id);
          break;
        case "permissions":
          const checkPermission = await user._permissions && user._permissions.map(i => i._id.toString() === query._id.toString())
          if (!checkPermission) {
            return next(JsonResponse("", 404, `Permission not found in Question`, false))
          }
          await user._permissions.remove(query._id);
          break;
        case "favorities":
          const checkFavorite = await user._favorities && user._favorities.map(i => i._id.toString() === query._id.toString())
          if (!checkFavorite) {
            return next(JsonResponse("", 404, `Anwser not found in Question`, false))
          }
          await user._favorities.remove(query._id);
          break;
        default:
          return
      }
      await user.save((err, data) => {
        if (err) {
          return next(JsonResponse("", 404, `error`, false))
        }
        res.json(JsonResponse("", 200, "Delete success", false))
      })
    } catch (error) {
      next(error)
    }
  },

  // createPermissionUser: async (req, res) => {
  //   try {
  //     const user = req.user;
  //     const newPermission = await new Permission(req.body);
  //     newPermission._user = user;
  //     await newPermission.save();
  //     user.permission(newPermission.id)
  //     res.json(JsonResponse("", 200, `Create permission by user`, false))
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // getPermissionUser: async (req, res) => {
  //   try {
  //     const user = req.user;
  //     // const permissionUser = user.populate('_permissions')
  //     const permissionUser = await User.findById(user._id).populate(' _permissions');
  //     res.json(JsonResponse(permissionUser, 200, "", false))
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // deletePermissionInUser: async (req, res, next) => {
  //   try {
  //     const {
  //       permissionId
  //     } = req.params;
  //     const check = req.user.isPermission(permissionId)
  //     if (!check) {
  //       return next(JsonResponse("", 404, `User not found role`, false))
  //     }
  //     await req.user.unPermission(permissionId);
  //     res.json(JsonResponse("", 200, "Delete success", false))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

}
