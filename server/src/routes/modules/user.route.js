/**
 * create route users for project
 */
const express = require('express');

const user = require('../../controllers/user.controller'); 

const reputation = require('../../controllers/reputation.controller')

const router = express.Router();
/* GET users listing. */
router.route('/')
  .post(user.createUser)
  .get(user.getAllUsers);

router.route('/:userId')
  .get(user.getOneUser)
  .put(user.updateUser)
  .delete(user.deleteUser);

//get calculate reputation score for per user
router.route('/:userId/reputation')
  .get(reputation.increasementReputationScore);

router.param('userId', user.getByIdUser);
router.get('/:userId/is-login', user.isLogin)
router.post('/login-local', user.loginUser);


module.exports = router;