/**
 * create controller permission for project
 * author: quangnc 
 * date up: 14/01/2019
 * date to: 15/01/2019
 * team: BE-RHP
 */
const omit = require('lodash/omit');
const split = require('lodash/split');
const forEach = require('lodash/forEach');

const Permission = require('../models/permission.model');
const JsonResponse = require('../helpers/json-response')

const includes = {
  user: "user"
}

module.exports = {
  /**
   * create Permission
   * @param req
   * @param res
   * @param next
   */
  createPermission: async (req, res, next) => {
    try {
      const data_permission = req.body;
      if (!data_permission.name) {
        return res.json(JsonResponse("", 403, "Name Permission is require", false))
      }

      const findPermission = await Permission.find({
        name: data_permission.name
      })
      if (Object.keys(findPermission).length > 0) {
        return res.json(JsonResponse("", 403, "Name Permission is exist", false))
      }

      const permission = await new Permission(data_permission);
      permission.save((errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "create Permission success", false));
      })
    } catch (error) {
      next(err)
    }
  },

  /**
   * Get all Categories
   * @param req
   * @param res
   * @param next
   */
  getAllPermissions: async (req, res, next) => {
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
      return await Permission.find(omit(query, ['_includes']))
        .populate(include)
        .exec((errors, data) => {
          if (errors) {
            return res.json(JsonResponse("", 401, errors, false))
          }
          return res.json(JsonResponse(data, 200, "", false))
        });
    } catch (error) {
      next(error)
    }
  },

  /**
   * Get one Permission
   * @param req
   * @param res
   * @param next
   */
  getOnePermission: async (req, res, next) => {
    try {
      return res.json(JsonResponse(req.permission, 200, "", false))
    } catch (error) {
      next(next)
    }
  },

  /**
   * update Permission by id 
   * @param req
   * @param res
   * @param next
   */
  updatePermission: async (req, res, next) => {
    try {
      const {
        permission,
        body
      } = req;

      const findPermission = await Permission.find({
        name: body.name
      })
      if (Object.keys(findPermission).length > 1) {
        return res.json(JsonResponse("", 403, "Name Permission is exist", false))
      }
      return await Permission.findByIdAndUpdate({
        _id: permission._id
      }, body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, "Update Permission success", false))
      })
    } catch (error) {
      next(error)
    }
  },

  /**
   * delete Permission by id
   * @param req
   * @param res
   * @param next
   */
  deletePermission: async (req, res, next) => {
    try {
      return await Permission.deleteOne(req.permission, err => {
        if (err) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete permission ${req.permission.name}`, false))
      })
    } catch (error) {
      next(error);
    }
  },

  /**
   * get Permission by id
   * @param req
   * @param res
   * @param next
   * @param id
   */
  getByIdPermission: async (req, res, next, id) => {
    try {
      const permission = await Permission.findById({
        _id: id
      })
      .populate(`_${req.query._includes}`);;
      if (!permission) {
        return res.json(JsonResponse("", 404, `Permission doesn't exist`, false));
      }
      req.permission = permission;
      next();
    } catch (error) {
      next(error)
    }
  },
}
