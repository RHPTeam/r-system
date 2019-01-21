
/**
 * create controller category for project
 * author: quangnc 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const omit = require('lodash/omit');
const split = require('lodash/split');
const forEach = require('lodash/forEach');

const Category = require('../models/category.model');
const JsonResponse = require('../helpers/json-response')

const includes = {
  blogs: "blogs"
}

module.exports = {
  /**
   * create category
   * @param req
   * @param res
   * @param next
   */
  createCategory: async (req, res, next) => {
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
   next(next)
    }
  },

  /**
   * Get all Categories
   * @param req
   * @param res
   * @param next
   */
  getAllCategories: async (req, res, next) => {
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
      return await Category.find(omit(query, ['_includes']), (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "", false));
      });

    } catch (error) {
      next(next)
    }
  },

  /**
   * Get one Category
   * @param req
   * @param res
   * @param next
   */
  getOneCategory: async (req, res, next) => {
    try {
      return res.json(JsonResponse(req.category, 200, "", false))
    } catch (error) {
      next(error)
    }
  },

  /**
   * update Category by id 
   * @param req
   * @param res
   * @param next
   */
  updateCategory: async (req, res, next) => {
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

      return await category.updateOne(body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, "update category success", false))
      })
    } catch (error) {
      next(error)
    }
  },

  /**
   * delete Category by id
   * @param req
   * @param res
   * @param next
   */
  deleteCategory: async (req, res, next) => {
    try {
      return await req.question.remove(err => {
        if (err) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete category ${req.category.name}`, false))
      })
    } catch (error) {
      next(error);
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
      })
      .populate(`_${req.query._includes}`);;
      if (!category) {
        return res.json(JsonResponse("", 404, `Category doesn't exist`, false));
      }
      req.category = category;
      next();
    } catch (error) {
      next(error);
    }
  },

}
