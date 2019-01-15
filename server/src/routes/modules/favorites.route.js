/**
 * create route favorites  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const favorites = require('../../controllers/favorites.controller'); 

const router = express.Router();
/* GET favorites listing. */
router.route('/')
  .get(favorites.index);

module.exports = router;