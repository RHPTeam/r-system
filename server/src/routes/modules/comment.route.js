/**
 * create route comment  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const comment = require('../../controllers/comment.controller'); 

/* GET comment listing. */
router.route('/')
  .get(comment.index);

module.exports = router;