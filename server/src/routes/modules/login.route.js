
/**
 * create route users for project
 * author: quangnc
 * date: 30/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const user = require('../../controllers/user.controller');

router.post('/', user.loginUser);

module.exports = router;
