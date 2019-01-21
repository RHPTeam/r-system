/**
 * create route anwser  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
//import dependences
const router = require('express-promise-router')();

const awnser = require('../../controllers/anwser.controller'); 


/* GET anwser listing. */
router.route('/')
  .get(awnser.index);

module.exports = router;