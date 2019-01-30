/**
 * create post controller for project
 * author:
 * date up:
 * date to:
 * team: BE-RHP
 */
const Post = require('../models/post.model');
const User = require('../models/user.model');
const Tag = require('../models/tag.model');
const score = require('../configs/reputationScore');
const { isObjectEmpty } = require('../helpers/function_rhp');
const JsonResponse = require('../helpers/json-response');

module.exports = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res) => {
    const data = await Post.find(req.query).populate({path: "_tags", select: "name"}).populate({path: "_owner", select: "nameDisplay"});
    if (isObjectEmpty(data)) return res.status(403).json(JsonResponse("", 403, "Query lấy dữ liệu thất bại!", true));
    res.status(200).json(JsonResponse(data, 200, "Lấy dữ liệu thành công! ^_^", false))
  },

  /**
   * @Name: Create Post (Create Tag)
   * @param req
   * @param res
   * @param next
   */
  create: async (req, res) => {
    if (req.value.body._tags.length > 5 || req.value.body._tags.length < 1) return res.status(405).json(JsonResponse("", 405, "Không được để trống thẻ tags, và tối đa chỉ được tạo 5 thẻ tag cho 1 câu hỏi!", true));
    const who = await User.findById(req.value.body._owner);
    const post = new Post(req.value.body);
    delete post._owner;
    post._owner = who._id;
    post._tags = [];
    await post.save();
    who._postList.push(post);
    for (const item of req.body._tags) {
      const tagCurrentObj = await Tag.find(item);
      if (tagCurrentObj.length > 0) {
        const postCurrent = await Post.findById(post._id);
        postCurrent._tags.push(tagCurrentObj[0]);
        await postCurrent.save();
      } else {
        const tag = await new Tag(item);
        who._tags.push(tag);
        who.save();
        const postCurrent = await Post.findById(post._id);
        postCurrent._tags.push(tag);
        await postCurrent.save();
        tag._owner = who._id;
        tag._postList.push(postCurrent);
        await tag.save();
      }
    }
    res.status(200).json(JsonResponse("", 200, "Tạo câu hỏi thành công!", false));
  },

  /**
   * @Name: Update Post by User
   * @param req
   * @param res
   * @param next
   */
  update: async (req, res) => {
    const {postId} = req.value.params;
    if (!req.query._userId) return res.status(405).json(JsonResponse("", 405, "Vui lòng xác thực quyền người dùng tạo bài viết! :)", true));
    const post = await Post.findById(postId);
    if (!post) return res.status(403).json(JsonResponse("", 403, "Dữ liệu này không tồn tại! :)", true));
    if (req.query._userId != post._owner._id) return res.status(403).json(JsonResponse("", 403, "Bạn không phải người tạo dữ liệu này! :)", true));
    const data = await Post.findByIdAndUpdate(postId, { $set: req.value.body }, { new: true });
    res.status(200).json(JsonResponse(data, 201, "Cập nhật thông tin thành công! :D"))
  },

  /**
   * @Name: Delete Post by User
   * @param req
   * @param res
   * @param next
   */
  delete: async (req, res) => {
    const {postId} = req.value.params;
    if (!req.query._userId) return res.status(405).json(JsonResponse("", 405, "Vui lòng xác thực quyền người dùng tạo bài viết! :)", true));
    const owner = await User.findById(req.query._userId);
    if (!owner) res.status(403).json(JsonResponse("", 403, "Tác giả bài viết này không tồn tại! :)", true));
    const post = await Post.findById(postId);
    if (!post) return res.json(JsonResponse("", 403, "Dữ liêu không tồn tại, thử lại! :)", true))
    if (req.query._userId != post._owner._id) return res.status(403).json(JsonResponse("", 403, "Bạn không phải người tạo bài viết! :)", true));
    const who = await User.findById(post._owner);
    who._postList.pull(post);
    await who.save();
    for (const item of post._tags) {
      const resultFindTag = await Tag.find(item);
      resultFindTag[0]._postList.pull(post);
      await resultFindTag[0].save();
    }
    await post.remove();
    res.json(JsonResponse("", 200, "Xóa dữ liệu thành công! T_T", false));
  },

  /**
   * @Name: Create Answer by User
   * @param req
   * @param res
   * @param next
   */
  createAnswer: async (req, res) => {
    const {postId} = req.value.params;
    const question = await Post.findById(postId);
    if (!question) return res.status(403).json(JsonResponse("", 403, "Câu hỏi không tồn tại! :))", true));
    const owner = await User.findById(req.value.body._owner);
    if (!owner) return res.status(403).json(JsonResponse("", 403, "Người dùng tạo bài viết không tồn tại!", true));
    delete req.value.body._owner;
    const postObjAnswer = await new Post(req.value.body);
    postObjAnswer.parent = postId;
    postObjAnswer._owner = owner;
    const data = await postObjAnswer.save();
    res.status(200).json(JsonResponse(data, 200, "Tạo câu trả lời thành công! ^_^", false));
  }
};
