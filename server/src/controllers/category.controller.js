const Category = require('../models/category.model');
const JsonResponse = require('../helpers/json-response')

findCategoryByName = async data => {
  try {
    return await Category.find()
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
   * create category
   * @param req
   * @param res
   */
  createCategory: async (req, res) => {
    try {
      const data_category = req.body;
      if (!data_category.name) {
        return res.json(JsonResponse("", 403, "Name category is require", false))
      }

      const findCategory = await Category.find({
        name: data_category.name
      })
      if (Object.keys(findCategory).length > 0) {
        return res.json(JsonResponse("", 403, "Name category is exist", false))
      }

      const category = await new Category(data_category);
      category.save((errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "create category success", false));
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
      return await Category.find({}, (errors, data) => {
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
   * Get one Category
   * @param req
   * @param res
   */
  getOneCategory: async (req, res) => {
    try {
      return res.json(JsonResponse(req.category, 200, "", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * update Category by id 
   * @param req
   * @param res
   */
  updateCategory: async (req, res) => {
    try {
      const {
        category,
        body
      } = req;

      const findCategory = await Category.find({
        name: body.name
      })
      if (Object.keys(findCategory).length > 1) {
        return res.json(JsonResponse("", 403, "Name category is exist", false))
      }
      return await Category.findByIdAndUpdate({
        _id: category._id
      }, body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, "update category success", false))
      })
    } catch (error) {

    }
  },

  /**
   * delete Category by id
   * @param req
   * @param res
   */
  deleteCategory: async (req, res) => {
    try {
      const {
        category
      } = req;
      return await Category.deleteOne(req.category, err => {
        if (err) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete category ${req.category.name}`, false))
      })
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * get category by id
   * @param req
   * @param res
   * @param next
   * @param id
   */
  getByIdCategory: async (req, res, next, id) => {
    try {
      const category = await Category.findById({
        _id: id
      });
      if (!category) {
        return res.json(JsonResponse("", 404, `Category doesn't exist`, false));
      }
      req.category = category;
      next();
    } catch (error) {
      console.log(error)
    }
  },
}
