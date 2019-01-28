/**
 * route Vote for project
 * author: Sky Albert
 * date: 27/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const vote = require('../../controllers/vote.controller');
const {
  validateParam,
  validateBody,
  schemas
} = require('../../helpers/validatorRoute');

router.route('/').post(vote.create);

module.exports = router;
