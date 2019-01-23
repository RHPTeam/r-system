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

router.route('/userId=:userId/commentId=:commentId')
  .delete(comment.deleteCommentById)
  .patch(comment.updateComment);

/* comment by user with blog, question answer */

router.route('/userId=:userId/blogId=:blogId')
  .post(comment.createCommentByUserInBlog);

router.route('/userId=:userId/questionId=:questionId')
  .post(comment.createCommentByUserInQuestion);

router.route('/userId=:userId/anwserId=:anwserId')
  .post(comment.createCommentByUserInAnwser);

module.exports = router;

