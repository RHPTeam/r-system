/**
 * create route users for project
 */
const express = require('express');

const user = require('../../controllers/user.controller'); 

const router = express.Router();
/* GET users listing. */
router.route('/')
  .post(user.createUser)
  .get(user.getAllUsers);

router.route('/:userId')
  .get(user.getOneUser)
  .put(user.updateUser)
  .delete(user.deleteUser);

router.param('userId', user.getByIdUser);
router.get('/:userId/is-login', user.isLogin)
router.post('/login-local', user.loginUser);


module.exports = router;