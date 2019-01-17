/**
 * create route Categories for project
 */
const router = require('express-promise-router')();

const category = require('../../controllers/category.controller'); 

/* GET Categories listing. */
router.route('/')
  .post(category.createCategory)
  .get(category.getAllCategories);

router.route('/:categoryId')
  .get(category.getOneCategory)
  .put(category.updateCategory)
  .delete(category.deleteCategory);

router.param('categoryId', category.getByIdCategory);

module.exports = router;