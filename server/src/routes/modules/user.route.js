
/**
 * create route users for project
 * author: quangnc
 * date: 08/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const user = require('../../controllers/user.controller');
const auth = require('../../middleware/auth-check');

router.route('/')
  .get(user.index);

router.route('/:userId')
  .patch(auth, user.update);

module.exports = router;
