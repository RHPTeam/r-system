/**
 * create route rank  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const rank = require('../../controllers/rank.controller'); 

/* GET rank listing. */
router.route('/')
  .get(rank.index);

module.exports = router;