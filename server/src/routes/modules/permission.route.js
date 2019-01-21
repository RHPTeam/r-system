/**
 * create route permission for project
 * author: quangnc
 * date: 08/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const permission = require('../../controllers/permission.controller'); 

/* GET permissions listing. */
router.route('/')
  .post(permission.createPermission)
  .get(permission.getAllPermissions);

router.route('/:permissionId')
  .get(permission.getOnePermission)
  .put(permission.updatePermission)
  .delete(permission.deletePermission);

router.param('permissionId', permission.getByIdPermission);


module.exports = router;