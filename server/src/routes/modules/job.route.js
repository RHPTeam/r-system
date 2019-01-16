/**
 * create route job  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const job = require('../../controllers/job.controller'); 

/* GET job listing. */
router.route('/')
  .get(job.index);

module.exports = router;