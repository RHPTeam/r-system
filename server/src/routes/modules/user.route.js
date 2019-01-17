/**
 * create route users for project
 * author: quangnc
 * date: 08/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const user = require('../../controllers/user.controller'); 

const reputation = require('../../controllers/reputation.controller')

/* GET users listing. */
router.route('/')
  .post(user.createUser)
  .get(user.getAllUsers);

router.route('/:userId')
  .get(user.getOneUser)
  .patch(user.updateUser)
  .delete(user.deleteUser);

//get calculate reputation score for per user
router.route('/:userId/reputation')
  .patch(reputation.updateScoreByUser)
  .get(reputation.getReputationByUser)
router.param('userId', user.getByIdUser);
router.get('/:userId/is-login', user.isLogin)
router.post('/login-local', user.loginUser);


module.exports = router;