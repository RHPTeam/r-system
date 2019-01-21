/**
 * create route comment  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const comment = require('../../controllers/comment.controller'); 

/* GET comment listing. */
router.route('/')
  .get(comment.getAllComments)

router.route('/commentId=:commentId')
  .get(comment.getOneCommentById)
  .delete(comment.deleteCommentById)
  .patch(comment.updateComment);

/* comment by user with blog, question answer */

router.route('/userId=:userId/blogId=:blogId')
  .post(comment.createCommentByUserInBlog);

router.route('/userId=:userId/questionId=:questionId')
  .post(comment.createCommentByUserInQuestion);

module.exports = router;
