/**
 * create route library  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const library = require('../../controllers/library.controller'); 

/* GET library listing. */
router.route('/')
  .get(library.index);

module.exports = router;