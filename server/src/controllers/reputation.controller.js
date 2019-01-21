/**
 * create controller reputation for project
 * author: hocpv
 * date up: 12/01/2019
 * date to: 14/01/2019
 * team: BE-RHP
 */
const Reputation = require('../models/reputation.model');
const User = require('../models/user.model');
const Question = require('../models/question.model');
const Anwser = require('../models/anwser.model');
const JsonResponse = require('../helpers/json-response');
const repuConfig = require('../configs/reputationScore');


module.exports = {
  updateScoreByUser: async (req, res) => {
    const score = req.body;

    //score luu lai gia tri se cong
    //
    //tao mot bien reputation de luu gia tri hien tai cua user
    //
    //update lai reputation = score +/-  reputation
    const {userId} = req.params
    const reputation = await User.findById(userId);
    console.log(reputation);
    //
    res.status(200).json(reputation);  
  },
  getReputationByUser: async (req, res, next) => {
    const {userId} = req.params;
    const user =  await User.findById(userId);
    console.log(user);
    res.status(200).json(user); 
  }
}