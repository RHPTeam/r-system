/**
 * create all route for project
 * http:localhost:8888/api/v1/{nameRoute}
 */

const express = require('express');
const router = express.Router();

router.use('/blogs', require('./modules/blog.route'));
router.use('/categories', require('./modules/category.route'));
router.use('/comments', require('./modules/comment.route'));
router.use('/favorities', require('./modules/favorites.route'));
router.use('/jobs', require('./modules/job.route'));
router.use('/notifications', require('./modules/notification.route'));
router.use('/permissions', require('./modules/permission.route'));
router.use('/posts', require('./modules/post.route'));
router.use('/ranks', require('./modules/rank.route'));
router.use('/tags', require('./modules/tag.route'));
router.use('/signin', require('./modules/login.route'));
router.use('/signup', require('./modules/signup.route'));
router.use('/secret', require('./modules/secret.route'));
router.use('/users', require('./modules/user.route'));
router.use('/votes', require('./modules/vote.route'));

module.exports = router;
