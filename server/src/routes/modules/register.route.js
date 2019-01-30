
/**
 * create route users for project
 * author: quangnc
 * date: 08/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const user = require('../../controllers/user.controller');

/* GET users listing. */
router.post('/', user.createUser)


module.exports = router;
