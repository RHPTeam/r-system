/**
 * create route trash  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const trash = require('../../controllers/trash.controller'); 

/* GET trash listing. */
router.route('/')
  .get(trash.index);

module.exports = router;