/**
 * create route product  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const product = require('../../controllers/product.controller'); 

const router = express.Router();
/* GET product listing. */
router.route('/')
  .get(product.index);

module.exports = router;