/**
 * create route trash  for project
 * author: quangnc
 * date up: 
 * date to: 
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const trash = require('../../controllers/trash.controller'); 

/* GET trash listing. */
router.route('/')
  .get(trash.index)
  .post(trash.create);

router.route('/:trashId')
  .patch(track.update)
  .delete( trash.delete);


module.exports = router;