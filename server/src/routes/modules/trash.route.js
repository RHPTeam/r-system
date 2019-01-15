/**
 * create route trash  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const trash = require('../../controllers/trash.controller'); 

const router = express.Router();
/* GET trash listing. */
router.route('/')
  .get(trash.index);

module.exports = router;