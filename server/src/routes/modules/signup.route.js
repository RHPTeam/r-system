/**
 * create route SignUp for project
 * author: quangnc
 * Editor: Tran Toan
 * date: 08/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const user = require('../../controllers/user.controller');
const {
  validateBody,
  schemas
} = require('../../helpers/validatorRoute');

router.route('/')
  .post(validateBody(schemas.userSchema), user.signUp);

module.exports = router;
