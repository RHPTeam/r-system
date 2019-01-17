/**
 * create route blog  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const blog = require('../../controllers/blog.controller'); 

/* GET blog listing. */
router.route('/')
  .get(blog.index);

module.exports = router;