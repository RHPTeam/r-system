
/**
 * create route users for project
 * author: quangnc
 * date: 08/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const user = require('../../controllers/user.controller');

// const reputation = require('../../controllers/reputation.controller')

/* GET users listing. */
router.route('/')
  .get(user.getAllUsers); // done

router.route('/:userId')
  .get(user.getOneUser) //done
  .patch(user.updateUser) // issues check errors
  .delete(user.deleteUser) //done
  .post(user.createUserPopulate);

router.route('/:userId/populate')
  .delete(user.deleteUserPopulate)

//get calculate reputation score for per user
// router.route('/:userId/reputation')
//   .get(reputation.increasementReputationScore);

// router.route('/:userId/permission')
//   .post(user.createPermissionUser)
//   .get(user.getPermissionUser)

// router.route('/:userId/permission/:permissionId')
//   .delete(user.deletePermissionInUser)

router.param('userId', user.getByIdUser);
router.get('/:userId/is-login', user.isLogin)


module.exports = router;
