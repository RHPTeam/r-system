/**
 * create route Tags for project
 */
const router = require('express-promise-router')();

const tag = require('../../controllers/tag.controller'); 

/* GET Tag listing. */
router.route('/')
    .post(tag.createTag)
    .get(tag.getAllTags);

router.route('/:tagId')
    .get(tag.getOneTag)
    .patch(tag.updateTag)
    .delete(tag.deleteTag);

router.route(':tagId/question')
    .get(tag.getTagByQuestion);

module.exports =router;

