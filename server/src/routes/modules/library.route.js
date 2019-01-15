/**
 * create route library  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const library = require('../../controllers/library.controller'); 

const router = express.Router();
/* GET library listing. */
router.route('/')
  .get(library.index);

module.exports = router;