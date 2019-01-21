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
const Tag = require('../models/tag.model')
const User = require('../models/user.model')
const JsonResponse = require('../helpers/json-response')

const findTag= async data => {
  try {
    return await Favorite.find()._tag
      .or([{
          _id: data._id
        }
      ])
      .exec();
  } catch (error) {

  }
}

module.exports = {

/**
   * Get all Favorite
   * @param req
   * @param res
   */
  getAllFavorities: async (req, res) => {
    try {
      return await Favorite.find({}, (errors,data) =>{
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
   * get one OneFavorite by id
   * @param req
   * @param res
   */
  getOneFavoriteById: async (req, res) => {
    try{
      const {favoriteId} = req.params;
      const favorite = await Favorite.findById(favoriteId);
      return res.json(JsonResponse(favorite, 200, "", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * delete favorite by id
   * @param req
   * @param res
   */
  deleteFavoriteById: async (req, res) => {
    try {
      const {favoriteId} = req.params;
      return await Favorite.findByIdAndRemove(favoriteId, (errors,data) => {
        if(errors) {
          res.json(JsonResponse("", 404, errors, false))
        }
        return res.send(JsonResponse("", 200, `Delete favorite success`, false))
      })
    } catch (error) {
      console.log(error);
    }
  },

  


  /**
   * create favorite by user
   * @param req
   * @param res
   * @param next
   */
  createFavoriteByUser: async (req, res, next) => {
    try {
        const {userId} = req.params
        //get user
        const user = await User.findById(userId)
        const checkArr = user._favorite;
        if(checkArr.length === 0){
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
          return res.json(JsonResponse(user, 200, "success", false));
        } else {
          return res.json(JsonResponse('', 500, "you ready created folder favorite of yourself", false))
        }
      } catch (error) {
      console.log(error)
    }
  },



  addTagToFavorite: async (req, res) => {
    try {
      //
      const {favoriteId} = req.params
      const {tagId} = req.params
      //get favorite
      const favorite = await Favorite.findById(favoriteId)
      const check =favorite._tag
      console.log(check);
      if(favorite._tag.includes(tagId)){
        favorite._tag.push(tagId)
        await favorite.save()
        return res.json(JsonResponse(favorite, 200, "success", false));  
      }
      return res.json(JsonResponse("", 404, "Tag is exist", false))

    } catch (error) {
      console.log(error);
    }
  }
}
