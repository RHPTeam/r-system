/**
 * create route Categories for project
 */
const express = require('express');

const category = require('../../controllers/category.controller'); 

const router = express.Router();
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