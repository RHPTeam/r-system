/**
 * create route Sign In for project
 * author: quangnc
 * Editor: Tran Toan
 * date: 30/01/2019
 * date-up: 31/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const user = require('../../controllers/user.controller');
const passport = require('passport');
const {
  validateBody,
  schemas
} = require('../../helpers/validatorRoute');

router.route('/').post(validateBody(schemas.userSignInSchema), passport.authenticate('local', { session: false }), user.signIn);

module.exports = router;
