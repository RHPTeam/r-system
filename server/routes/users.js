/**
 * create route users for project
 */
const express = require('express');

const user = require('../controllers/user'); 

const router = express.Router();
/* GET users listing. */
router.route('/')
  .post(user.createUser)
  .get(user.getAllUsers);

// router.route('/:userId')
//   .get(user.getOneUser)
//   .put(user.updateUser)
//   .delete(user.deleteUser);

// router.param('userId', user.getByIdUser);

// router.post('/login', user.loginUser);


module.exports = router;