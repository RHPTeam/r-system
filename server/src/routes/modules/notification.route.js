/**
 * create route notification for project
 * author: quangnc
 * date: 08/01/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const notification = require('../../controllers/notification.controller'); 

/* GET notifications listing. */
router.route('/')
  .get(notification.index)
// router.route('/')
//   .post(notification.createNotification)
//   .get(notification.getAllNotifications);

// router.route('/:notificationId')
//   .get(notification.getOneNotification)
//   .put(notification.updateNotification)
//   .delete(notification.deleteNotification);

// router.param('notificationId', notification.getByIdNotification);


module.exports = router;