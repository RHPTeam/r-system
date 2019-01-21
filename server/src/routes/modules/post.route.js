/**
 * route post for project
 * author: Sky Albert
 * date: 21/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const post = require('../../controllers/post.controller');

const {
  validateParam,
  validateBody,
  schemas
} = require('../../helpers/validatorRoute')

router.route('/')
  .post(validateBody(schemas.postSchema), post.create);

module.exports = router;
