/**
 * create route blog  for project
 * author: hocpv
 * date up: 16/1/2019
 * date to: 16/1/2019
 * team: BE-RHP
 */
const Blog = require('../models/blog.model');
const User = require('../models/user.model');
const Category = require('../models/category.model');
const Comment = require('../models/comment.model');
const { isObjectEmpty } = require('../helpers/function_rhp')
const JsonResponse = require('../helpers/json-response');

module.exports = {

    /**
     * Get all Blogs
     * Author: Tran Toan - Fixed Index (if u want get all blog, not need using query)
     * Note: If u want get one blog, u can use query for: localhost/example.com/api/blogs?_id=1
     * @param req
     * @param res
     */
    index: async(req, res) => {
        const data = await Blog.find(req.query).populate({
            path: "_author",
            select: "nameDisplay title createdAt image"
        }).populate({
            path: "_category",
            select: "name"
        });
        if (isObjectEmpty(data)) return res.status(403).json(JsonResponse("", 403, "Query lấy dữ liệu thất bại!", true));
        res.status(200).json(JsonResponse(data, 200, "Lấy dữ liệu thành công!", false));
    },

    /**
     * create Blog
     * Author: Tran Toan - Fixed create blog with code perform.
     * @param req
     * @param res
     * @param next
     */
    create: async(req, res) => {
        const author = await User.findById(req.value.body._author);
        if (!author) return res.status(403).json(JsonResponse("", 403, "Người dùng tạo bài viết không tồn tại!", true));
        const category = await Category.findById(req.value.body._category);
        if (!category) return res.status(403).json(JsonResponse("", 403, "Danh mục bài viết không tồn tại!", true));
        delete req.value.body._author;
        const blog = new Blog(req.value.body);
        blog._author = author;
        const data = await blog.save();
        author._blogs.push(blog);
        await author.save();
        category._blogs.push(blog);
        category.save();
        res.status(200).json(JsonResponse(data, 200, "Tạo bài viết thành công!", false))
    },

    /**
     * update blog by id
     * Author: Tran Toan - Fixed Update return old value
     * Note: If u want update, u have to have _userId query: localhost/example.com/api/blogs/1?_userId=1
     * @param req
     * @param res
     */
    update: async(req, res) => {
        const { blogId } = req.value.params;
        if (!req.query._userId) return res.status(405).json(JsonResponse("", 405, "Vui lòng xác thực quyền người dùng tạo bài viết! :)", true));
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(403).json(JsonResponse("", 403, "Bài viết này không tồn tại! :)", true));
        if (req.query._userId != blog._author._id) return res.status(403).json(JsonResponse("", 403, "Bạn không phải người tạo bài viết! :)", true));
        const data = await Blog.findByIdAndUpdate(blogId, { $set: req.value.body }, { new: true });
        res.status(200).json(JsonResponse(data, 200, "Cập nhật bài viết thành công!", false))
    },

    /**
     * delete blog by id
     * Author: Tran Toan - Fixed delete blog will delete blog in user and category collection.
     * Note: If u want delete, u have to have _userId query: localhost/example.com/api/blogs/1?_userId=1
     * @param req
     * @param res
     */
    delete: async(req, res) => {
        const { blogId } = req.value.params;
        if (!req.query._userId) return res.status(405).json(JsonResponse("", 405, "Vui lòng xác thực quyền người dùng tạo bài viết! :)", true));
        const author = await User.findById(req.query._userId);
        if (!author) res.status(403).json(JsonResponse("", 403, "Tác giả bài viết này không tồn tại! :)", true));
        const blog = await Blog.findById(blogId);
        const category = await Category.findById(blog._category);
        if (!blog) return res.status(403).json(JsonResponse("", 403, "Bài viết này không tồn tại! :)", true));
        if (req.query._userId != blog._author._id) return res.status(403).json(JsonResponse("", 403, "Bạn không phải người tạo bài viết! :)", true));
        await blog.remove();
        author._blogs.pull(blog);
        await author.save();
        category._blogs.pull(blog);
        await category.save();
        res.status(200).json(JsonResponse('', 200, 'Xóa bài viết thành công! T_T', false))
    }
};