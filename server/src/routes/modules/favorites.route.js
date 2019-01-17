/**
 * create route favorites  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const favorites = require('../../controllers/favorites.controller'); 

/* GET favorites listing. */
router.route('/')
  .get(favorites.index);

module.exports = router;