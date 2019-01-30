
/**
 * create controller favorites for project
 * author: hocpv
 * date up: 17/1/2019
 * date to:  17/1/2019
 * team: BE-RHP
 */
const Favorite = require('../models/favorites.model');
const Question = require('../models/question.model')
const Anwser = require('../models/anwser.model')
const Blog = require('../models/blog.model')
const User = require('../models/user.model')
const JsonResponse = require('../helpers/json-response')



module.exports = {

  /**
     * Get all Favorite
     * @param req
     * @param res
     */
  getAllFavorities: async (req, res) => {
      return await Favorite.find({}, (errors, data) => {
        if (errors) {
          return res.status(404).json(JsonResponse("", 404, errors, true));
        }
      res.status(200).json(JsonResponse(data, 200, "Lấy dữ liệu thành công!", false));
      })
  },


  /**
  * get one OneFavorite by id
  * @param req
  * @param res
  */
  getOneFavoriteById: async (req, res) => {
      const { favoriteId } = req.params;
      const favorite = await Favorite.findById(favoriteId);
      if (!favorite) return res.status(403).json(JsonResponse("", 403, "Mục yêu thích này không tồn tại! :)", true));
      res.status(200).json(JsonResponse(favorite, 200, "Lấy mục yêu thích thành công!", false))
  },

  /**
   * delete favorite by id
   * @param req
   * @param res
   */
  deleteFavoriteById: async (req, res) => {
      const { favoriteId } = req.params;
      return await Favorite.findByIdAndRemove(favoriteId, (errors, data) => {
        if (errors) {
          return res.status(404).json(JsonResponse("", 404, errors, true))
        }
      res.status(200).send(JsonResponse("", 200, `Xóa mục yêu thích thành công`, false))
      })
  },




  /**
   * create favorite by user
   * @param req
   * @param res
   * @param next
   */
  createFavoriteByUser: async (req, res, next) => {
      const { userId } = req.params
      //get user
      const user = await User.findById(userId)
      const checkArr = user._favorite;
      console.log(user._favorite)
      if (checkArr.length === 0) {
        //Create new favorite with userid
        req.body["_user"] = userId;
        const newFavorite = new Favorite(req.body)
        //assign favorite to user
        newFavorite.user = user;
        //save favorite
        await newFavorite.save();
        //add favorite to user
        user._favorite.push(newFavorite)
        //save user
        await user.save();
        res.status(200).json(JsonResponse(user, 200, "Bạn đã tạo mục yêu thích thành công! <3", false));
      } else {
        return res.status(500).json(JsonResponse('', 500, "Bạn đã tạo mục yêu thích!", true))
      }
  },

  /**
   * add blog to favorite
   * @param req
   * @param res
   */
  addBlogToFavorite: async (req, res) => {
      const { favoriteId } = req.params
      const { blogId } = req.params
      //get favorite
      const favorite = await Favorite.findById(favoriteId)
      if (!favorite) return res.status(403).json(JsonResponse("", 403, "Mục yêu thích này không tồn tại! :)", true));
      const blog = await Blog.findById(blogId)
      if (!blog) return res.status(403).json(JsonResponse("", 403, "Bài viết này không tồn tại! :)", true));
      //check blog added
      const check = favorite._blog
      const isInArray = check.some(function (arr) {
        return arr.equals(blogId);
      });
      if (!isInArray) {
        //add blog to favorite
        favorite._blog.push(blogId)
        //save favorite
        await favorite.save()
        res.status(200).json(JsonResponse(favorite, 200, "Thêm bài viết vào mục yêu thích thành công", false));
      }
      return res.status(500).json(JsonResponse("", 500, "Bài viết đã tồn tại trong mục yêu thích!", true))
  },
  /**
   * delete blog from favorite
   * @param req
   * @param res
   */
  deleteBlogFromFavorite: async (req, res) => {
    const { favoriteId } = req.params
    const { blogId } = req.params
    //get favorite
    const favorite = await Favorite.findById(favoriteId)
    if (!favorite) return res.status(403).json(JsonResponse("", 403, "Mục yêu thích này không tồn tại! :)", true));
    const blog = await Blog.findById(blogId)
    if (!blog) return res.status(403).json(JsonResponse("", 403, "Bài viết này không tồn tại! :)", true));
    //check blog added
    const check = favorite._blog
    const isInArray = check.some(function (arr) {
      return arr.equals(blogId);
    });
    if (isInArray) {
      //remove blog to favorite
      favorite._blog.pull(blogId)
      //save favorite
      await favorite.save()
      res.status(200).json(JsonResponse(favorite, 200, "Xóa bài viết từ mục yêu thích thành công", false));
    }
    return res.status(403).json(JsonResponse("", 403, "Bài viết không tồn tại trong mục yêu thích!", true))
  },

  /**
   * add question to favorite
   * @param req
   * @param res
   */
  addQuestionToFavorite: async (req, res) => {
    const { favoriteId } = req.params
    const { questionId } = req.params
    //get favorite
    const favorite = await Favorite.findById(favoriteId)
    if (!favorite) return res.status(403).json(JsonResponse("", 403, "Mục yêu thích này không tồn tại! :)", true));
    const question = await Question.findById(questionId)
    if (!question) return res.status(403).json(JsonResponse("", 403, "Câu hỏi này không tồn tại! :)", true));
    //check question added
    const check = favorite._question
    const isInArray = check.some(function (arr) {
      return arr.equals(questionId);
    });
    if (!isInArray) {
      //add questionId to favorite
      favorite._question.push(questionId)
      //save favorite
      await favorite.save()
      res.status(200).json(JsonResponse(favorite, 200, "Thêm câu hỏi vào mục yêu thích thành công", false));
    }
    return res.status(500).json(JsonResponse("", 500, "Câu hỏi đã tồn tại trong mục yêu thích!", true))
  },

  /**
   * delete question from favorite
   * @param req
   * @param res
   */
  deleteQuestionFromFavorite: async (req, res) => {
    const { favoriteId } = req.params
    const { questionId } = req.params
    //get favorite
    const favorite = await Favorite.findById(favoriteId)
    if (!favorite) return res.status(403).json(JsonResponse("", 403, "Mục yêu thích này không tồn tại! :)", true));
    const question = await Question.findById(questionId)
    if (!question) return res.status(403).json(JsonResponse("", 403, "Câu hỏi này không tồn tại! :)", true));
    //check question added
    const check = favorite._question
    const isInArray = check.some(function (arr) {
      return arr.equals(questionId);
    });
    if (isInArray) {
      //remove questionId to favorite
      favorite._question.pull(questionId)
      //save favorite
      await favorite.save()
      res.status(200).json(JsonResponse(favorite, 200, "Xóa câu hỏi từ mục yêu thích thành công", false));
    }
    return res.status(403).json(JsonResponse("", 403, "Câu hỏi không tồn tại trong mục yêu thích!", true))
  },

    /**
     * add anwser to favorite
     * @param req
     * @param res
     */
    addAnwserToFavorite: async (req, res) => {
      const { favoriteId } = req.params
      const { anwserId } = req.params
      //get favorite
      const favorite = await Favorite.findById(favoriteId)
      if (!favorite) return res.status(403).json(JsonResponse("", 403, "Mục yêu thích này không tồn tại! :)", true));
      const anwser= await Anwser.findById(anwserId)
      if (!anwser) return res.status(403).json(JsonResponse("", 403, "Câu trả lời này không tồn tại! :)", true));
      //check anwser added
      const check = favorite._anwser
      const isInArray = check.some(function (arr) {
        return arr.equals(anwserId);
      });
      if (!isInArray) {
        //add anwserId to favorite
        favorite._anwser.push(anwserId)
        //save favorite
        await favorite.save()
        res.status(200).json(JsonResponse(favorite, 200, "Thêm câu trả lời vào mục yêu thích thành công", false));
      }
      return res.status(500).json(JsonResponse("", 500, "Câu trả lời đã tồn tại trong mục yêu thích!", true))
    },

    /**
     * delete anwser from favorite
     * @param req
     * @param res
     */
    deleteAnwserFromFavorite: async (req, res) => {
      const { favoriteId } = req.params
      const { anwserId } = req.params
      //get favorite
      const favorite = await Favorite.findById(favoriteId)
      if (!favorite) return res.status(403).json(JsonResponse("", 403, "Mục yêu thích này không tồn tại! :)", true));
      const anwser= await Anwser.findById(anwserId)
      if (!anwser) return res.status(403).json(JsonResponse("", 403, "Câu trả lời này không tồn tại! :)", true));
      //check anwser added
      const check = favorite._anwser
      const isInArray = check.some(function (arr) {
        return arr.equals(anwserId);
      });
      if (isInArray) {
        //remove anwserId to favorite
        favorite._anwser.pull(anwserId)
        //save favorite
        await favorite.save()
        res.status(200).json(JsonResponse(favorite, 200, "Xóa câu trả lời từ mục yêu thích thành công", false));
      }
      return res.status(403).json(JsonResponse("", 403, "Câu trả lời không tồn tại trong mục yêu thích!", true))
    },

}
