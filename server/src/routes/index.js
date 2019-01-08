/* CONFIG ROUTES INDEX ALL OF ROUTES BEFORE IMPORT TO APP.JS */
/**
 * create all route for project
 */

const express = require('express');

const users = require('./modules/user.route');

const router = express.Router();

router.use('/users', users)

module.exports = router;