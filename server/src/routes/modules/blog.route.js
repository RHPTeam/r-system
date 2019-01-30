/**
 * create route blog  for project
 * author: hocpv
 * Update Person: Tran Toan
 * date up: 16/1/2019
 * date to: 16/1/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const blog = require('../../controllers/blog.controller');
const {
  validateParam,
  validateBody,
  schemas
} = require("../../helpers/validatorRoute");

router.route('/')
  .get(blog.index)
  .post(validateBody(schemas.blogSchema), blog.create);

router.route('/:blogId')
  .patch([validateBody(schemas.blogSchema), validateParam(schemas.idSchema, "blogId")], blog.update)
  .delete(validateParam(schemas.idSchema, "blogId"), blog.delete);

module.exports = router;
