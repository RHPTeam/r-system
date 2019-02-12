
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

router.route('/favoriteId=:favoriteId/blogId=:blogId')
  .post(favorites.addBlogToFavorite)
  .delete(favorites.deleteBlogFromFavorite)

router.route('/favoriteId=:favoriteId/questionId=:questionId')
  .post(favorites.addQuestionToFavorite)
  .delete(favorites.deleteQuestionFromFavorite)


router.route('/favoriteId=:favoriteId/anwserId=:anwserId')
  .post(favorites.addAnwserToFavorite)
  .delete(favorites.deleteAnwserFromFavorite)
  
module.exports = router;