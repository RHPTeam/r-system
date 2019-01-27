
/**
 * create route anwser  for project
 * author: 
 * date up: 
 * date to: 
 * team: BE-RHP
 */
//import dependences
const router = require('express-promise-router')();

const awnser = require('../../controllers/anwser.controller'); 


/* GET awnser listing. */
router.route('/')
  .post(awnser.createAnwser)
  .get(awnser.getAllAnwser);

router.route('/:awnserId')
  .get(awnser.getOneAnwser)
  .put(awnser.updateAnwser)
  .delete(awnser.deleteAnwser)

router.param('awnserId', awnser.getByIdAnwser);


module.exports = router;
