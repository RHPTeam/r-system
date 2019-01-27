/**
 * create controller notification for project
 * author: quangnc
 * date up: 14/01/2019
 * date to: 20/01/2019
 * team: BE-RHP
 */
const Notification = require('../models/notification.model');
const JsonResponse = require('../helpers/json-response')

module.exports = {
  /**
   * Create one notification
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res, next) =>{
    try {
      return res.json(JsonResponse("", 200, "success", false));
    } catch (error) {
      console.log(error)
    }
  },
  createNotification: async (req, res, next) => {
    try {
      
    } catch (error) {
      console.log(error)
    }
  },
}

