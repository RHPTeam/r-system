/**
 * create controller favorites for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const Favorites = require('../models/favorites.model');
const JsonResponse = require('../helpers/json-response')

module.exports = {
  /**
   *
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res, next) => {
    try {
      return res.json(JsonResponse("", 200, "success", false));
    } catch (error) {
      console.log(error)
    }
  },
}
