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
const Comment = require('../models/comment.model')
const JsonResponse = require('../helpers/json-response')

findBlogByTitle = async data => {
  try {
    return await Blog.find()
      .or([{
        name: data.title
      }])
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  /**
   * create Blog
   * @param req
   * @param res
   * @param next
   */
  createBlog: async (req, res, next) => {
    try {
      const newBlog = req.body
      if (!newBlog) {
        return res.status(403).json(JsonResponse("", 403, "Title blog is require", true))
      }

      const findBlog = await Blog.find({
        title: newBlog.title
      })

      if (Object.keys(findBlog).length > 0) {
        return res.status(403).json(JsonResponse("", 403, "Title blog is exist", true))
      }

      const blog = await new Blog(newBlog)
      blog.save((errors, data) => {
        if (errors) {
          return res.status(404).json(JsonResponse("", 404, errors, true));
        }
        return res.status(200).json(JsonResponse(data, 200, "create blog successful", false))
      })
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * Get all Blogs
   * @param req
   * @param res
   */
  getAllBlogs: async (req, res) => {
    try {
      return await Blog.find({}, (errors, data) => {
        if (errors) {
          return res.status(404).json(JsonResponse("", 404, errors, true));
        }
        return res.status(200).json(JsonResponse(data, 200, "", false));
      })
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * get one blog by id
   * @param req
   * @param res
   */
  getOneBlog: async (req, res) => {
    try {
      const {blogId} = req.params;
      const blog = await Blog.findById(blogId);
      if(!blog){
        return res.status(403).json(JsonResponse("", 403, "Blog is not exist! :)", true));
      } 
      return res.status(200).json(JsonResponse(blog, 200, "", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * update blog by id
   * @param req
   * @param res
   */
  updateBlog: async (req, res) => {
    try {
      const {blogId} = req.params;
      const {userId} = req.params;
      const newBlog = req.body;
      const blog = await Blog.findById(blogId)
      //check privilege edit
      if(!blog){
        return res.status(403).json(JsonResponse("", 403, "Blog is not exist! :)", true));
      }  else if(!blog._author.equals(userId)) {
        return res.status(500).json(JsonResponse("", 500, "you don't privilege edit! :)", true));
      } else {
        const blogUpdate= await Blog.findByIdAndUpdate(blogId, newBlog)
        return res.status(200).json(JsonResponse(blogUpdate, 200, "update blog success", false))
      }
    } catch (error) {
      console.log(error)
    }
  },
  /**
   * delete blog by id
   * @param req
   * @param res
   */
  deleteBlog: async (req, res) => {
    try {
      const {blogId} = req.params;
      const {userId} = req.params;
      const blog = await Blog.findById(blogId)
      //check privilege edit
      if(!blog){
        return res.status(403).json(JsonResponse("", 403, "Blog is not exist! :)", true));
      }  else if(!blog._author.equals(userId)) {
        return res.status(500).json(JsonResponse("", 500, "you don't privilege delete! :)", true));
      } else {
        return await Blog.findByIdAndRemove(blogId, (errors, data) => {
          if (errors) {
            res.status(404).json(JsonResponse("", 404, errors, true))
          }
          return res.status(200).send(JsonResponse("", 200, `Delete blog success`, false))
        })
      }
     
    } catch (error) {
      console.log(error);
    }
  },

  /*****************************___USER___************************ */
  /**
   * create blog by user
   * @param req
   * @param res
   *
   */
  createBlogByUser: async (req, res) => {
    try {
      const {userId} = req.params;
      const {categoryId} = req.params;
      // Create new blog with author = userId
      req.body["_author"] = userId;
      req.body["_category"] = categoryId;
      const newBlog = new Blog(req.body);
      // get user, get category
      const user = await User.findById(userId)
      const category = await Category.findById(categoryId)
      // assign blog to user,assign blog to category
      newBlog.user = user;
      newBlog.category = category
      //save blog
      await newBlog.save();
      //add blog to user
      user._blogs.push(newBlog);
      category._blogs.push(newBlog);
      //save user, category
      await user.save();
      await category.save()
      return res.status(200).json(JsonResponse(newBlog, 200, "create blog by user success ", false))
    } catch (error) {
      console.log(error)
    }
  },
  /**
   * get blog by user
   * @param req
   * @param res
   *
   */
  getBlogByUser: async (req, res) => {
    try {
      const {userId} = req.params;
      const user = await User.findById(userId).populate("_blogs")
      return res.status(200).json(JsonResponse(user._blogs, 200, "get blog by user success ", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**********************************____CATEGORY____**********/
  /**
   * get blog by categoryId
   * @param req
   * @param res
   *
   */
  getBlogByCategoryId: async (req, res) => {
    try {
      const {categoryId} = req.params;
      const category = await Category.findById(categoryId)
      if(!category){
        return res.status(403).json(JsonResponse("", 403, "category is not exist! :)", true));
      } 
      return res.status(200).json(JsonResponse(category._blogs, 200, "get category by user success ", false))
    } catch (error) {
      console.log(error)
    }
  },

  /************************____COMMENT____*************/
  /**
   * get blog by commentId
   * @param req
   * @param res
   *
   */
  getCommentInBlog: async (req, res) => {
    try {
      const {blogId} = req.params;
      const blog = await Blog.findById(blogId)
      if(!blog){
        return res.status(403).json(JsonResponse("", 403, "blog is not exist! :)", true));
      } 
      return res.status(200).json(JsonResponse(blog._comments, 200, "get comments by user success ", false))
    } catch (error) {
      console.log(error);
    }
  },


}

