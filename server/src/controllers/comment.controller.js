/**
 * create controller comment for project
 * author: hocpv
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
      return await Comment.find({}, (errors, data) => {
        if (errors) {
          return res.status(404).json(JsonResponse("", 404, errors, true));
        }
      res.status(200).json(JsonResponse(data, 200, "", false));
      })
  },

  /**
  * get one comments by id
  * @param req
  * @param res
  */
  getOneCommentById: async (req, res) => {
      const { commentId } = req.params;
      const comment = await Comment.findById(commentId);
      if(!comment) return res.status(403).json(JsonResponse("", 403, "Bình luận này không tồn tại! :)", true));
      return res.status(200).json(JsonResponse(comment, 200, "", false))
  },

  /**
   * update blog by id
   * @param req
   * @param res
   */
  updateComment: async (req, res) => {
      const { commentId } = req.params;
      const {userId} = req.params;
      const newComment = req.body;
      const findComment = await Comment.findById(commentId)
      if (!findComment) {
        return res.status(403).json(JsonResponse("", 403, "Bình luận này không tồn tại! -_- ", true))
      } else if(!findComment._user.equals(userId)){
        return res.status(500).json(JsonResponse("", 500, "Bạn không có quyền sửa bình luận! -_- ", true))
      }
      return await Comment.findByIdAndUpdate(commentId, newComment, (errors, data) => {
        if (errors) {
          return res.status(404).json(JsonResponse("", 404, errors, true))
        }
      res.status(200).json(JsonResponse(newComment, 200, "Cập nhật bình luận thành công! <3", false))
      })
  },

  /**
   * delete Comment by id
   * @param req
   * @param res
   */
  deleteCommentById: async (req, res) => {
      const { commentId } = req.params;
      const {userId} = req.params;
      const findComment = await Comment.findById(commentId)
      if (!findComment) {
        return res.status(403).json(JsonResponse("", 403, "Bình luận này không tồn tại! -_- ", true))
      } else if(!findComment._user.equals(userId)){
        return res.status(500).json(JsonResponse("", 500, "Bạn không có quyền xóa bình luận! -_- ", true))
      }
      return await Comment.findByIdAndRemove(commentId, (errors, data) => {
        if (errors) {
          return res.status(404).json(JsonResponse("", 404, errors, true))
        }
      res.status(200).send(JsonResponse("", 200, `Xóa bình luận thành công!`, false))
      })
  },

  /**
   * create comment by user in blog
   * @param req
   * @param res
   * 
   */
  createCommentByUserInBlog: async (req, res) => {
      const { userId } = req.params;
      const { blogId } = req.params;
      // Create new comment with author = userId
      req.body["_user"] = userId;
      req.body["_blog"] = blogId;
      const newComment = new Comment(req.body);
      // get user, get blog
      const user = await User.findById(userId)
      const blog = await Blog.findById(blogId)
      if(!blog) return res.status(403).json(JsonResponse("", 403, "Bài viết này không tồn tại! :)", true));
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
      res.status(200).json(JsonResponse(newComment, 200, "Tạo bình luận trong bài viết thành công! <3", false))
  },

  /**
   * create comment by user in question
   * @param req
   * @param res
   * 
   */
  createCommentByUserInQuestion: async (req, res) => {
  
      const { userId } = req.params;
      const { questionId } = req.params;
      // Create new comment with author = userId
      req.body["_user"] = userId;
      req.body["_question"] = questionId;
      const newComment = new Comment(req.body);
      // get user, get question
      const user = await User.findById(userId)
      const question = await Question.findById(questionId)
      if(!question) return res.status(403).json(JsonResponse("", 403, "Câu hỏi này không tồn tại! :)", true));
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
      res.status(200).json(JsonResponse(newComment, 200, "Tạo bình luận trong câu hỏi thành công! <3", false))
  },

  /**
   * create comment by user in awnser
   * @param req
   * @param res
   * 
   */
  createCommentByUserInAnwser: async (req, res) => {
      const { userId } = req.params;
      const { anwserId } = req.params;
      // Create new comment with author = userId
      req.body["_user"] = userId;
      req.body["_anwser"] = anwserId;
      const newComment = new Comment(req.body);
      // get user, get answer
      const user = await User.findById(userId)
      const anwser = await Anwser.findById(anwserId)
      if(!anwser) return res.status(403).json(JsonResponse("", 403, "Câu trả lời này không tồn tại! :)", true));
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
      return res.status(200).json(JsonResponse(newComment, 200, "Tạo bình luận trong câu trả lời thành công! <3", false))
  },

}

