/**
 * create route comment  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const comment = require('../../controllers/comment.controller'); 

const router = express.Router();
/* GET comment listing. */
router.route('/')
  .get(comment.index);

module.exports = router;