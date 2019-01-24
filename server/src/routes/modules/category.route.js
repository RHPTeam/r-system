/**
 * create route Categories for project
 */
const router = require('express-promise-router')();
const category = require('../../controllers/category.controller');
const {
  validateParam,
  validateBody,
  schemas
} = require("../../helpers/validatorRoute");

router.route('/')
  .get(category.index)
  .post(validateBody(schemas.categorySchema), category.create);

router.route('/:categoryId')
  .patch([validateParam(schemas.idSchema, "categoryId"), validateBody(schemas.categorySchema)], category.update)
  .delete(validateParam(schemas.idSchema, "categoryId"), category.delete);

module.exports = router;
