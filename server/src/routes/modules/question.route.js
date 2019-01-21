
/**
 * create route question for project
 * author: quangnc
 * date: 15/01/2019
 * date: 16/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const question = require('../../controllers/question.controller'); 

/* GET questions listing. */
router.route('/')
  .post(question.createQuestion)
  .get(question.getAllQuestions);

router.route('/:questionId')
  .get(question.getOneQuestion)
  .put(question.updateQuestion)
  .delete(question.deleteQuestion)
  .post(question.createQuestionPopulate)

router.route('/:questionId/populate')
  .delete(question.deleteQuestionPopulate)
  
router.param('questionId', question.getByIdQuestion);


module.exports = router;
