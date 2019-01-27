/**
 * create controller comment for project
 * author: hocpv
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const Comment = require('../models/comment.model')
const User = require('../models/user.model')
const Blog = require('../models/blog.model')
const Anwser = require('../models/anwser.model')
const {isObjectEmpty} = require('../helpers/function_rhp')
const JsonResponse = require('../helpers/json-response')

module.exports = {

  /**
    * Get all Comments
    * @param req
    * @param res
    * Note: If u want get one Comment, u can use query for: localhost/example.com/api/comments?_id=1
    */
  index: async (req, res) => {
    const data = await Comment.find(req.query).populate({
      path: "_user",
      select: "nameDisplay title createdAt image"
    }).populate({
      path: "_blog",
      select: "title"
    }).populate({
      path: "_anwser",
      select: "content"
    });
    if (isObjectEmpty(data)) return res.status(403).json(JsonResponse("", 403, "Query lấy dữ liệu thất bại!", true));
    res.status(200).json(JsonResponse(data, 200, "Lấy dữ liệu thành công!", false));
  },

  /**
   * create comment in blog, anwser
   * @param req
   * @param res
   * 
   */
   create: async (req, res) => {
     console.log(req.value.body._user);
     const user = await User.findById(req.value.body._user);
     if (!user) return res.status(403).json(JsonResponse("", 403, "Người dùng tạo bình luận không tồn tại!", true));
     if(req.value.body._blog){
        const blog = await Blog.findById(req.value.body._blog);
        if (!blog) return res.status(403).json(JsonResponse("", 403, "Bài viết không tồn tại!", true));
        delete req.value.body._user;
        const comment = new Comment(req.value.body);
        comment._user = user;
        const data = await comment.save();
        user._comments.push(comment);
        await user.save();
        blog._comments.push(comment);
        blog.save();
        res.status(200).json(JsonResponse(data, 200, "Tạo bình luận trong bài viết thành công!", false))
     } else if (req.value.body._question){
       const anwser = await Anwser.findById(req.value.body._anwser);
       if (!question) return res.status(403).json(JsonResponse("", 403, "Câu trả lời không tồn tại!", true));
        delete req.value.body._user;
        const comment = new Comment(req.value.body);
        comment._user = user;
        const data = await comment.save();
        user._comments.push(comment);
        await user.save();
        anwser._comments.push(comment);
        anwser.save();
        res.status(200).json(JsonResponse(data, 200, "Tạo bình luận trong câu trả lời thành công!", false))
     } else {
      res.status(500).json(JsonResponse("", 500, "Dm lỗi gì rồi nez ^^", false))
     }
   },

   /**
   * update comment by id
   * Note: If u want update, u have to have _userId query: localhost/example.com/api/comments/1?_userId=1
   * @param req
   * @param res
   */
  update: async (req, res) => {
    const {commentId} = req.value.params;
    if(!req.query._userId) return res.status(405).json(JsonResponse("", 405, "Vui lòng xác thực quyền người dùng tạo bình luận! :)", true));
    const comment = await Comment.findById(commentId);
    if(!comment) return res.status(403).json(JsonResponse("", 403, "Bình luận này không tồn tại! :)", true));
    if (req.query._userId != comment._user._id) return res.status(403).json(JsonResponse("", 403, "Bạn không phải người tạo bình luận! :)", true));
    const data = await Comment.findByIdAndUpdate(commentId, {$set: req.value.body}, {new: true});
    res.status(200).json(JsonResponse(data, 200, "Cập nhật bình luận thành công!", false))
  },

  /**
   * 
   * delete comment in blog, anwser by id
   * @param req
   * @param res
   * Note: If u want delete, u have to have _userId query: localhost/example.com/api/comments/1?_userId=1
   */
  delete: async (req, res) => {
    const {commentId} = req.value.params;
    if(!req.query._userId) return res.status(405).json(JsonResponse("", 405, "Vui lòng xác thực quyền người dùng tạo bình luận! :)", true));
    const user = await User.findById(req.query._userId);
    if (!user) res.status(403).json(JsonResponse("", 403, "Người tạo bình luận này không tồn tại! :)", true));
    const comment = await Comment.findById(commentId);
    if(!comment) return res.status(403).json(JsonResponse("", 403, "Bình luận này không tồn tại! :)", true));
    if (req.query._userId != comment._user._id) return res.status(403).json(JsonResponse("", 403, "Bạn không phải người tạo bình luận! :)", true));
    if(comment._blog){
      const blog = await Blog.findById(comment._blog)
      await comment.remove();
      user._comments.pull(comment);
      await user.save();
      blog._comments.pull(comment);
      await blog.save();
      res.status(200).json(JsonResponse('', 200, 'Xóa bình luận trong bài viết thành công! T_T', false))
    } else if(comment._anwser){
      const anwser = await Anwser.findById(comment._anwser)
      await comment.remove();
      user._comments.pull(comment);
      await user.save();
      anwser._comments.pull(comment);
      await anwser.save();
      res.status(200).json(JsonResponse('', 200, 'Xóa bình luận trong câu trả lời thành công! T_T', false))
    }else {
      res.status(500).json(JsonResponse("", 500, "Dm lỗi gì rồi nez ^^", false))
     }
  }

}

