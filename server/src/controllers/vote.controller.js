/**
 * create controller product for project
 * author: Sky Albert
 * date up: 27/01/2019
 * date to: 28/01/2019 (Not Fixed)
 * team: BE-RHP
 */
const Vote = require('../models/vote.model');
const User = require('../models/user.model');
const Post = require('../models/post.model');
const reputation = require('../configs/reputationScore');
const JsonResponse = require('../helpers/json-response');

module.exports = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res) => {

  },

  /**
   * Link Url: http://localhost/api/v1/votes?_postId=1&_userId=1&typeVoteId=1
   * @param req
   * @param res
   * @param next
   */
  create: async (req, res) => {
    console.log("create vote!")
    const postId = req.query._postId;
    const userId = req.query._userId;
    const typeVoteId = req.query._typeVoteId;
    const who = await User.findById(userId);
    if (!who) return res.status(405).json(JsonResponse("", 405, "Người dùng không tồn tại!", true));
    const post = await Post.findById(postId);
    if (!post) return res.status(403).json(JsonResponse("", 403, "Dữ liệu không tồn tại để thực hiện thao tác này!", true));
    let bountyAmount = 0;
    switch (typeVoteId) {
      case "1": {
        console.log("Increment!")
        bountyAmount = reputation.score.increasement.voteQuestion;
        console.log(bountyAmount);
        break;
      }
      case "2": {
        bountyAmount = - reputation.score.decreasement.voteQuestion;
        break;
      }
      default: {
        return res.status(403).json(JsonResponse("", 403, "Query vote thất bại!", true));
      }
    }
    const voteObject = {
      typeVoteId: typeVoteId,
      BountyAmount: bountyAmount,
      createAt: Date.now()
    }
    const vote = await new Vote(voteObject);
    vote._post = post;
    vote._owner = who;
    // await vote.save();
    console.log("test 01");
    post._votes.push(vote._id);
    // await post.save();
    console.log("test 02");
    who._votes.push(vote._id);
    // await who.save();
    console.log("=========================")
    console.log(vote);
  }
}
