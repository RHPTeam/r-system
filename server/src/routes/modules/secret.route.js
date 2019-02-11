/**
 * create route Sceret for project
 * Author: Tran Toan
 * date: 31/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();
const user = require('../../controllers/user.controller');
const passport = require('passport');

router.route('/').get(passport.authenticate('jwt', { session: false }), user.secret);

module.exports = router;
