/**
 * create post controller for project
 * author:
 * date up:
 * date to:
 * team: BE-RHP
 */
const Post = require('../models/post.model');
const User = require('../models/user.model');
const JsonResponse = require('../helpers/json-response')

module.exports = {
  /**
   *
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res, next) => {
    console.log("Ha ha hihi ")
  },

  /**
   * @Name: Create Post by User
   * @param req
   * @param res
   * @param next
   */
  create: async (req, res, next) => {
    const who = await User.findById(req.value.body._owner);
    const newPost = req.value.body;
    delete newPost._owner;

    const post = new Post(newPost);
    post._owner = who;
    await post.save();

    who._postsList.push(post);
    await who.save();

    res.json(JsonResponse("", 200, "Thêm dữ liệu thành công", false))
  },
}
