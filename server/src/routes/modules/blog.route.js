/**
 * create route blog  for project
 * author: hocpv
 * date up: 16/1/2019
 * date to: 16/1/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const blog = require('../../controllers/blog.controller'); 

/* GET blog listing. */
router.route('/')
  .get(blog.getAllBlogs)
  .post(blog.createBlog);//create by hand of admin

/* GET blog by id listing. */
router.route('/:blogId')
  .get(blog.getOneBlog)
  .post(blog.updateBlog)
  .delete(blog.deleteBlog);

/*GET blog by user */
router.route('/:userId')
  .get(blog.getBlogByUser)
  .post(blog.createBlogByUser);

/*GET blog by category */
router.route('/:categoryId')
  .get(blog.getBlogByCategoryId);

/*GET blog by comment */
router.route('/:blogId/comment')
  .get(blog.getCommentInBlog)

module.exports = router;