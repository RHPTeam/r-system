/**
 * create controller favorites for project
 * author: hocpv
 * date up: 17/1/2019
 * date to:  17/1/2019
 * team: BE-RHP
 */
const router = require('express-promise-router')();

const favorites = require('../../controllers/favorites.controller'); 

/* GET favorites listing. */
router.route('/')
  .get(favorites.getAllFavorities)

router.route('/favoriteId=:favoriteId')
  .get(favorites.getOneFavoriteById)
  .delete(favorites.deleteFavoriteById)


router.route('/userId=:userId')
  .post(favorites.createFavoriteByUser);

router.route('/favoriteId=:favoriteId/tagId=:tagId')
  .post(favorites.addTagToFavorite)
module.exports = router;