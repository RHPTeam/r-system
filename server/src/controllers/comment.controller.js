/**
 * create controller comment for project
 * author: h
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const Comment = require('../models/comment.model')
const User = require('../models/user.model')
const Question = require('../models/question.model')
const Blog = require('../models/blog.model')
const Anwser = require('../models/anwser.model')
const JsonResponse = require('../helpers/json-response')

module.exports = {

  /**
    * Get all Comments
    * @param req
    * @param res
    */
  getAllComments: async (req, res) => {
    try {
      return await Comment.find({}, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "", false));
      })
    } catch (error) {
      console.log(error)
    }
  },

  /**
  * get one comments by id
  * @param req
  * @param res
  */
  getOneCommentById: async (req, res) => {
    try {
      const { commentId } = req.params;
      const comment = await Comment.findById(commentId);
      return res.json(JsonResponse(comment, 200, "", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * update blog by id
   * @param req
   * @param res
   */
  updateComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const newComment = req.body;
      const findComment = await Comment.find({ content: newComment.content })
      if (Object.keys(findComment).length > 1) {
        return res.json(JsonResponse("", 403, "Content comment is exist", false))
      }
      return await Comment.findByIdAndUpdate(commentId, newComment, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        return res.json(JsonResponse(newComment, 200, "update comment success", false))
      })
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * delete Comment by id
   * @param req
   * @param res
   */
  deleteCommentById: async (req, res) => {
    try {
      const { commentId } = req.params;
      return await Comment.findByIdAndRemove(commentId, (errors, data) => {
        if (errors) {
          res.json(JsonResponse("", 404, errors, false))
        }
        return res.send(JsonResponse("", 200, `Delete Comment success`, false))
      })
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * create comment by user in blog
   * @param req
   * @param res
   * @param next
   */
  createCommentByUserInBlog: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { blogId } = req.params;
      // Create new comment with author = userId
      req.body["_user"] = userId;
      req.body["_blog"] = blogId;
      const newComment = new Comment(req.body);
      // get user, get blog
      const user = await User.findById(userId)
      const blog = await Blog.findById(blogId)
      // assign Comment to user,assign Comment to blog
      newComment.user = user;
      newComment.blog = blog
      //save blog
      await newComment.save();
      //add comment to user, blog
      user._comments.push(newComment);
      blog._comments.push(newComment);
      //save user, blog
      await user.save();
      await blog.save()
      return res.json(JsonResponse(newComment, 200, "create Comment by user success ", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * create comment by user in question
   * @param req
   * @param res
   * @param next
   */
  createCommentByUserInQuestion: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { questionId } = req.params;
      // Create new comment with author = userId
      req.body["_user"] = userId;
      req.body["_question"] = questionId;
      const newComment = new Comment(req.body);
      // get user, get question
      const user = await User.findById(userId)
      const question = await Question.findById(questionId)
      // assign Comment to user,assign Comment to question
      newComment.user = user;
      newComment.question = question
      //save question
      await newComment.save();
      //add comment to user, question
      user._comments.push(newComment);
      question._comments.push(newComment);
      //save user, question
      await user.save();
      await question.save()
      return res.json(JsonResponse(newComment, 200, "create Comment by user in question success ", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * create comment by user in awnser
   * @param req
   * @param res
   * @param next
   */
  createCommentByUserInAnwser: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { anwserId } = req.params;
      // Create new comment with author = userId
      req.body["_user"] = userId;
      req.body["_anwser"] = anwserId;
      const newComment = new Comment(req.body);
      // get user, get answer
      const user = await User.findById(userId)
      const anwser = await Anwser.findById(anwserId)
      // assign Comment to user,assign Comment to anser
      newComment.user = user;
      newComment.anwser = anwser
      //save question
      await newComment.save();
      //add comment to user, anwser
      user._comments.push(newComment);
      anwser._comments.push(newComment);
      //save user, blog
      await user.save();
      await anwser.save()
      return res.json(JsonResponse(newComment, 200, "create Comment by user in anwser success ", false))
    } catch (error) {
      console.log(error)
    }
  },

}

