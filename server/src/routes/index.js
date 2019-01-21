/* CONFIG ROUTES INDEX ALL OF ROUTES BEFORE IMPORT TO APP.JS */
/**
 * create all route for project
 * http:localhost:8888/api/v1/{nameRoute}
 */

const express = require('express');

//require all route
const anwsers = require('./modules/anwser.route')
const blogs = require('./modules/blog.route')
const categories = require('./modules/category.route')
const comments = require('./modules/comment.route')
const favorities = require('./modules/favorites.route')
const jobs = require('./modules/job.route')
const library = require('./modules/library.route')
const notifications = require('./modules/notification.route')
const permissions = require('./modules/permission.route')
const products = require('./modules/product.route')
const questions = require('./modules/question.route')
const ranks = require('./modules/rank.route')
const tags = require('./modules/tag.route')
const trashs = require('./modules/trash.route')
const users = require('./modules/user.route')

const router = express.Router();

//middleware for per route
router.use('/anwsers',anwsers)
router.use('/blogs',blogs)
router.use('/categories', categories)
router.use('/comments', comments)
router.use('/favorities', favorities)
router.use('/jobs', jobs)
router.use('/library', library)
router.use('/notifications', notifications)
router.use('/permissions', permissions)
router.use('/products', products)
router.use('/questions', questions)
router.use('/ranks', ranks)
router.use('/tags', tags)
router.use('/trashs', trashs)
router.use('/users', users)

module.exports = router;