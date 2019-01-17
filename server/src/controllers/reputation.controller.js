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

const reputation = 0;

module.exports = {
  increasementReputationScore: async (req, res) => {
    try {
      const { userId } = req.params;
      //count questions of user
      const user = await User.findById(userId).populate('_questions');
      const resQuestion = json(user._questions);
      const countQuestion = resQuestion.count();
      const repuQuestion = countQuestion*repuConfig.score.increasement.createQuestion;
      //count anwsers in per question
      const repuAnwserInQuestion = 0;
      const a=[];
      const b=[];
      const countAnwser = 0;
      const repuAnwser = 0;
      for(const i=1; i <= questions; i++){
        a[i]=resQuestion._id;
        const question = await Question.findById(a[i]).populate('_anwsers'); 
        const resAnwser =  json(question._anwsers);
        countAnwser = resAnwser.count()+ countAnwser;
        repuAnwser = countAnwser*repuConfig.score.increasement.anwserForEachQuestion;
        for(const j = 1; j <= countAnwser; j++){
          b[j] = resAnwser._id;
          const anwser = await Anwser.findById(b[j]).populate('_comment')
        }
      }
      
    } catch (error){
      console.log(error);
    }
  },
  decreasementReputationScore: async (req, res) => {
    try {

    } catch (error){
      console.log(error);
    }
  },
  awardReputationScore: async (req, res) => {
    try{

    } catch (error) {
      console.log(error);
    } 
  }

}