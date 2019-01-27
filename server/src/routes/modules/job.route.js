
/**
 * create route job  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const job = require('../../controllers/job.controller');
const {
  validateParam,
  validateBody,
  schemas
} = require("../../helpers/validatorRoute")

/* GET job listing. */
router.route('/')
  .get(job.index)
  .post(validateBody(schemas.jobSchema), job.create);

router.route('/:jobId')
  .patch([validateParam(schemas.idSchema, "jobId"), validateBody(schemas.jobSchema)], job.update)
  .delete(validateParam(schemas.idSchema, "jobId"), job.delete);

module.exports = router;

