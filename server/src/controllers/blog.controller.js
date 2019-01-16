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
  } catch (error){
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
      const data_blog = req.body
      if(!data_blog) {
        return res.json(JsonResponse("", 403, "Title blog is require", false))
      }

      const findBlog = await Blog.find({
        title:data_blog.title
      })

      if(Object.keys(findBlog).length >0) {
        return res.json(JsonResponse("", 403, "Title blog is exist", false))
      }

      const blog = await new Blog(data_blog)
      blog.save((errors,data) => {
        if(errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "create blog successful", false))
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
      return await Blog.find({}, (errors,data) =>{
        if(errors){
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "", false));
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
    try{
      const {blogId} = req.params;
      const blog = await Blog.findById(blogId);
      return res.json(JsonResponse(blog, 200, "", false))
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
      const newBlog = req.body;
      const findBlog = await Blog.find({title:newBlog.title})
      if (Object.keys(findBlog).length> 1){
        return res.json(JsonResponse("", 403, "Title blog is exist", false))
      }
      return await Blog.findByIdAndUpdate(blogId, newBlog, (errors, data) => {
        if(errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        return res.json(JsonResponse(newBlog, 200, "update blog success", false))
      })
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
      return await Blog.findByIdAndRemove(blogId, (errors,data) => {
        if(errors) {
          res.json(JsonResponse("", 404, errors, false))
        }
        return res.send(JsonResponse("", 200, `Delete blog success`, false))
      })
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
      // Create new blog
      const newBlog = new Blog(req.body);
      // get user
      const user = await User.findById(userId)
      // assign blog to user
      newBlog.user = user;
      //save blog
      await newBlog.save();
      //add blog to user
      user._blogs.push(newBlog);
      //save user
      await user.save();
      return res.json(JsonResponse(newBlog, 201, "create blog by user success ", false))
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
      const user = await User.findById(userId).populate(_blogs)
      return res.json(JsonResponse(user._blogs, 200, "get blog by user success ", false))
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
      const category = await Category.findById(categoryId).populate('_blogs')
      return res.json(JsonResponse(category._blogs, 200, "get category by user success ", false))
    } catch (error) {
      console.log(error)
    }
  },

  /************************____COMMENT____*************/
  /**
   * get blog by categoryId
   * @param req
   * @param res
   * 
   */
  getCommentInBlog: async (req, res) => {
    try {
      const {blogId} = req.params;
      const blog = await Blog.findById(blogId).populate('_comments');
      return res.json(JsonResponse(blog._comments, 200, "get comments by user success ", false))
    } catch (error) {
      console.log(error);
    }
  },

  



}
