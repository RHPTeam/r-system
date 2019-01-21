const Permission = require('../models/permission.model');
const JsonResponse = require('../helpers/json-response')

findPermissionByName = async data => {
  try {
    return await permission.find()
      .or([{
        name: data.name
      }])
      .exec();
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  /**
   * create Permission
   * @param req
   * @param res
   */
  createPermission: async (req, res) => {
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
      console.log(error)
    }
  },

  /**
   * Get all Categories
   * @param req
   * @param res
   */
  getAllPermissions: async (req, res) => {
    try {
      return await Permission.find({}, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "", false));
      });

    } catch (error) {
      console.log(error)
    }
  },

  /**
   * Get one Permission
   * @param req
   * @param res
   */
  getOnePermission: async (req, res) => {
    try {
      return res.json(JsonResponse(req.permission, 200, "", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * update Permission by id 
   * @param req
   * @param res
   */
  updatePermission: async (req, res) => {
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
        res.json(JsonResponse("", 200, "update Permission success", false))
      })
    } catch (error) {

    }
  },

  /**
   * delete Permission by id
   * @param req
   * @param res
   */
  deletePermission: async (req, res) => {
    try {
      const {
        permission
      } = req;
      return await Permission.findByIdAndDelete({
        _id: permission._id
      }, (errors, data) => {
        if (errors) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete Permission ${permission.name} success`, false))
      })
    } catch (error) {
      console.log(error);
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
      });
      if (!permission) {
        return res.json(JsonResponse("", 404, `Permission doesn't exist`, false));
      }
      req.permission = permission;
      next();
    } catch (error) {
      console.log(error)
    }
  },
}
