/**
 * create route rank  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const rank = require('../../controllers/rank.controller'); 

const router = express.Router();
/* GET rank listing. */
router.route('/')
  .get(rank.index);

module.exports = router;