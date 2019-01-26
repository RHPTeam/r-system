/**
 * create route comment  for project
 * author: hocpv
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const comment = require('../../controllers/comment.controller'); 
const {
  validateParam,
  validateBody,
  schemas
} = require("../../helpers/validatorRoute");


/* GET comment listing. */
router.route('/')
  .get(comment.index)
  .post(validateBody(schemas.commentSchema),comment.create)

router.route('/:commentId')
  .patch([validateBody(schemas.commentSchema), validateParam(schemas.idSchema,"commentId")], comment.update)
  .delete(validateParam(schemas.idSchema,"commentId"),comment.delete);
module.exports = router;

