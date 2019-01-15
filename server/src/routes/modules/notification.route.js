/**
 * create route notification for project
 * author: quangnc
 * date: 08/01/2019
 * team: BE-RHP
 */
const express = require('express');

const notification = require('../../controllers/notification.controller'); 

const router = express.Router();
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