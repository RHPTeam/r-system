/* CONFIG ROUTES INDEX ALL OF ROUTES BEFORE IMPORT TO APP.JS */
/**
 * create all route for project
 */

const express = require('express');

const users = require('./modules/user.route');
const categories = require('./modules/category.route');
const tags = require('./modules/tag.route')
// const notifications = require('./modules/notification.route')
const permissions = require('./modules/permission.route')

const router = express.Router();

router.use('/users', users)
router.use('/categories', categories)
router.use('/tags', tags)
// router.use('/notifications', notifications)
router.use('/permissions', permissions)

module.exports = router;