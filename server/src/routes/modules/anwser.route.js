/**
 * create route anwser  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const awnser = require('../../controllers/anwser.controller'); 

const router = express.Router();
/* GET anwser listing. */
router.route('/')
  .get(awnser.index);

module.exports = router;