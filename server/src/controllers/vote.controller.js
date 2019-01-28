/**
 * create controller product for project
 * author: Sky Albert
 * date up: 27/01/2019
 * date to: 28/01/2019 (Not Fixed)
 * team: BE-RHP
 */
const Vote = require('../models/vote.model');
const JsonResponse = require('../helpers/json-response')

module.exports = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res) => {
    try {
      return res.json(JsonResponse("", 200, "success", false));
    } catch (error) {
      console.log(error)
    }
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  create: async (req, res) => {
    console.log();
  }
}
