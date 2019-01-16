/**
 * create route question for project
 * author: quangnc
 * date: 15/01/2019
 * date: 16/01/2019
 * team: BE-RHP
 */
const express = require('express');

const question = require('../../controllers/question.controller'); 

const router = express.Router();
/* GET questions listing. */
router.route('/')
  .post(question.createQuestion)
  .get(question.getAllQuestions);

router.route('/:questionId')
  .get(question.getOneQuestion)
  .put(question.updateQuestion)
  .delete(question.deleteQuestion);

router.param('questionId', question.getByIdQuestion);


module.exports = router;