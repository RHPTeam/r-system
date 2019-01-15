/**
 * create route question  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const question = require('../../controllers/question.controller'); 

const router = express.Router();
/* GET question listing. */
router.route('/')
  .get(question.index);

module.exports = router;