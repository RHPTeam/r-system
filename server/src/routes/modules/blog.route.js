/**
 * create route blog  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const blog = require('../../controllers/blog.controller'); 

const router = express.Router();
/* GET blog listing. */
router.route('/')
  .get(blog.index);

module.exports = router;