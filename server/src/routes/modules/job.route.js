/**
 * create route job  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const express = require('express');

const job = require('../../controllers/job.controller'); 

const router = express.Router();
/* GET job listing. */
router.route('/')
  .get(job.index);

module.exports = router;