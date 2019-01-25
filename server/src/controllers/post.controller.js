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
const JsonResponse = require('../helpers/json-response');

module.exports = {
  /**
   *
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res, next) => {
    const query = req.query;
    await Post.find(query, (err, data) => {
      if (err) {
        return res.json(JsonResponse("", 404, err, true));
      }
      return res.json(JsonResponse(data, 200, "Lấy dữ liệu thành công! ^_^", false))
    }).populate({
      path: "_tags",
      select: "name"
    }).populate({
      path: "_owner",
      select: "nameDisplay"
    })
  },

  /**
   * @Name: Create Post by User
   * @param req
   * @param res
   * @param next
   */
  create: async (req, res, next) => {
    // get data
    const who = await User.findById(req.value.body._owner);
    const tags = req.value.body._tags;
    const newPost = req.value.body;
    delete newPost._owner;
    let data, firstPostId, postTags;

    // save to tag
    for (const [index, itemTag] of tags.entries()) {
      const itemTagObj = {
        name: itemTag
      };
      const tag = await new Tag(itemTagObj);
      console.log(tag);
      tag._owner = who;
      await tag.save();
      delete newPost._tags;
      const post = new Post(newPost);

      firstPostId = post._id;

      post._owner = who;
      console.log("1");
      post._tags.push(tag);
      console.log("2");

      if (index < 1) {
        console.log("Not have id")

        data = await post.save();
        console.log("2.1")
        console.log(post);

        console.log("3")
        console.log(who)
        console.log("3.1")
        who._postsList.push(post._id);
        console.log("3.2")
        who._tags.push(tag._id);
        console.log("4")
        await who.save();
        console.log("4.1")
        console.log(who)
        console.log("Fixed: 4.2")

        /*
        - push again _postList in who collection (done)
        - splice two post diff:
         + Don't allow item second more create (done)
         + Update tag in post (done)
         + create tag in tag (done)
         + update _postList in tag (done)
         + update _tags in user
         */

        console.log("5")
        const tagCurrent = await Tag.findById(tag._id);
        console.log(tagCurrent)
        console.log("6")
        tagCurrent._postList.push(post._id);
        console.log(tagCurrent)
        console.log("Fixed: 6.1")
        post._tags = [];
        console.log(" - " + post._tags.length)
        console.log("After delete tags")
        post._tags.push(tagCurrent)
        postTags = post;
        console.log(" - " + post._tags.length)
        console.log("7")
        await tag.save();
      } else {
        // Update _postList in tag
        const tagCurrent = await Tag.findById(tag._id)
        tagCurrent._postList.push(tag);

        console.log("Have id")
        // Update tag in post (postId)
        console.log("2.1 - else")
        console.log(postTags);
        console.log(tag)
        postTags._tags.push(tagCurrent)
        const tagTemp = postTags._tags
        console.log("2.2 - else")
        const crawlRequestSecondPost = {
          _tags: tagTemp
        };
        console.log(crawlRequestSecondPost);
        console.log("2.3 - else")
        console.log(firstPostId)
        // let postFinnish = await Post.findByIdAndUpdate(firstPostId, { $set: crawlRequestSecondPost });

        let postFinnish = await Post.findByIdAndUpdate(firstPostId,
          { "$push": { "_tags": tagCurrent } },
          { "new": true, "upsert": true },
          function (err, data) {
            if (err) throw err;
            console.log("Du lieu sau khi update: \n" + data);
          }
        );

        console.log("3 - else");
        // update _tags to user
        who._tags.push(tag._id);
        console.log("4 - finnish");
        console.log(postFinnish)
      }
     }
    res.status(200).json(JsonResponse(data, 200, "Thêm dữ liệu thành công! <3", false));

    // Post List của tag in post co van de
    },

  /**
   * @Name: Update Post by User
   * @param req
   * @param res
   * @param next
   */
  update: async (req, res, next) => {
    const {postId} = req.value.params;
    const newPost = req.value.body;

    const data = await Post.findByIdAndUpdate(postId, newPost);

    res.json(JsonResponse(data, 201, "Cập nhật thông tin thành công! :D"))
  },

  /**
   * @Name: Delete Post by User
   * @param req
   * @param res
   * @param next
   */

  delete: async (req, res, next) => {
    const {postId} = req.value.params;

    const post = await Post.findById(postId);
    if (!post) return res.json(JsonResponse("", 403, "Dữ liêu không tồn tại, thử lại! :)", true))

    const who = await User.findById(post._owner);

    await post.remove();
    who._postsList.pull(post);
    await who.save();

    res.json(JsonResponse("", 200, "Xóa dữ liệu thành công! T_T", false));
  }
}
