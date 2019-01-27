/**
 * create controller category for project
 * author: Nguyen Chi Quang
 * Updater: Tran Toan
 * date up:
 * date to:
 * team: BE-RHP
 */

const Blog = require('../models/blog.model');
const Category = require('../models/category.model');
const Trash = require('../models/trash.model');
const JsonResponse = require('../helpers/json-response');
const {isObjectEmpty} = require('../helpers/function_rhp')

module.exports = {

  /**
   * create category
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res) => {
    const data = await Category.find(req.query).populate({
      path: "_blogs",
      select: "title"
    });
    if (isObjectEmpty(data)) return res.status(403).json(JsonResponse("", 403, "Query lấy dữ liệu thất bại!", true));
    res.status(200).json(JsonResponse(data, 200, "Lấy dữ liệu thành công!", false));
  },

  /**
   * create category
   * @param req
   * @param res
   * @param next
   */
  create: async (req, res) => {
    const result = await Category.find({name: req.body.name});
    if (Object.keys(result).length > 0) return res.status(403).json(JsonResponse("", 403, "Danh mục bài viết này đã tồn tại!", false));
    const category = new Category(req.body);
    const data = await category.save();
    res.status(200).json(JsonResponse(data, 200, "Tạo danh mục bài viết thành công!", false));
  },

  /**
   * update Category by id
   * @param req
   * @param res
   * @param next
   */
  update: async (req, res) => {
    const { categoryId } = req.value.params;
    const data = await Category.findOneAndUpdate(categoryId, { $set: req.value.body }, { new: true });
    res.status(200).json(JsonResponse(data, 200, "Cập nhật dữ liệu danh mục bài viết thành công!", false));
  },

  /**
   * delete Category by id
   * Note: If u want delete category, u have to admin and using query: localhost/api/1?type=admin
   * @param req
   * @param res
   * @param next
   */
  delete: async (req, res) => {
    const { categoryId } = req.value.params;
    const category = await Category.findById(categoryId);
    for (const item of category._blogs) {
      const blog = await Blog.findById(item._id);
      blog._category = null;
      blog.status = 'trash';
      const trash = await Trash.find({ type: req.query.type });
      trash[0]._blogs.push(blog);
      await trash[0].save()
      await blog.remove();
    }
    await category.remove();
    res.status(200).json(JsonResponse("", 200, "Xóa danh mục thành công! Bài viết thuộc danh mục này sẽ được tìm thấy ở thùng rác.", false));
  }
};
