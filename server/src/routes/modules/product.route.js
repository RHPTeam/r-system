/**
 * create route product  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const product = require('../../controllers/product.controller'); 

/* GET product listing. */
router.route('/')
  .get(product.index);

module.exports = router;