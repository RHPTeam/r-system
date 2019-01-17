/**
 * create route question  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const question = require('../../controllers/question.controller'); 

/* GET question listing. */
router.route('/')
  .get(question.index);

module.exports = router;