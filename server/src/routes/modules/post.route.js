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
} = require('../../helpers/validatorRoute');

router.route('/')
  .get(post.index)
  .post(validateBody(schemas.postSchema), post.create);

router.route('/:postId')
  .post([validateBody(schemas.postSchema), validateParam(schemas.idSchema, "postId")], post.createAnswer)
  .patch([validateParam(schemas.idSchema, "postId"), validateBody(schemas.postSchema)], post.update)
  .delete(validateParam(schemas.idSchema, "postId"), post.delete);

router.route('/:postId/vote')
  .post(validateParam(schemas.idSchema, "postId"), post.vote);

module.exports = router;
