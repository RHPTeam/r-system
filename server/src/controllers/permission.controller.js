const Permisstion = require('../models/Permisstion.model');
const JsonResponse = require('../helpers/json-response')

findPermisstionByName = async data => {
  try {
    return await permisstion.find()
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
   * create Permisstion
   * @param req
   * @param res
   */
  createPermisstion: async (req, res) => {
    try {
      const data_permisstion = req.body;
      if (!data_permisstion.name) {
        return res.json(JsonResponse("", 403, "Name Permisstion is require", false))
      }

      const findPermisstion = await Permisstion.find({
        name: data_permisstion.name
      })
      if (Object.keys(findPermisstion).length > 0) {
        return res.json(JsonResponse("", 403, "Name Permisstion is exist", false))
      }

      const permisstion = await new Permisstion(data_permisstion);
      permisstion.save((errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "create Permisstion success", false));
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
  getAllCategories: async (req, res) => {
    try {
      return await Permisstion.find({}, (errors, data) => {
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
   * Get one Permisstion
   * @param req
   * @param res
   */
  getOnePermisstion: async (req, res) => {
    try {
      return res.json(JsonResponse(req.permisstion, 200, "", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * update Permisstion by id 
   * @param req
   * @param res
   */
  updatePermisstion: async (req, res) => {
    try {
      const {
        permisstion,
        body
      } = req;

      const findPermisstion = await Permisstion.find({
        name: body.name
      })
      if (Object.keys(findPermisstion).length > 1) {
        return res.json(JsonResponse("", 403, "Name Permisstion is exist", false))
      }
      return await Permisstion.findByIdAndUpdate({
        _id: permisstion._id
      }, body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, "update Permisstion success", false))
      })
    } catch (error) {

    }
  },

  /**
   * delete Permisstion by id
   * @param req
   * @param res
   */
  deletePermisstion: async (req, res) => {
    try {
      const {
        permisstion
      } = req;
      return await Permisstion.findByIdAndDelete({
        _id: permisstion._id
      }, (errors, data) => {
        if (errors) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete Permisstion ${permisstion.name} success`, false))
      })
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * get Permisstion by id
   * @param req
   * @param res
   * @param next
   * @param id
   */
  getByIdPermisstion: async (req, res, next, id) => {
    try {
      const permisstion = await Permisstion.findById({
        _id: id
      });
      if (!permisstion) {
        return res.json(JsonResponse("", 404, `Permisstion doesn't exist`, false));
      }
      req.permisstion = permisstion;
      next();
    } catch (error) {
      console.log(error)
    }
  },
}
