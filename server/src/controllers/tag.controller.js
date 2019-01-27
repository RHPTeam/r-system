const Tag = require('../models/tag.model');
const JsonResponse = require('../helpers/json-response')

module.exports = {
  /**
   * create tag
   * @param req
   * @param res
   */
  createTag: async (req, res) => {
    const newTag = req.body;
    const data = await new Tag(newTag);
    data.save();
    res.json(JsonResponse(data, 200, "Tạo tag thành công! <3", false));
  },

  /**
   * Get All Tags
   * @param req
   * @param res
   */
  getAllTags: async (req, res) => {
    const tag = await Tag.find({});
    if (!tag) return res.json(JsonResponse("", 404, "Không có dữ liệu bạn cần tìm! T_T", true));
    res.json(JsonResponse(data, 200, "Lấy dữ liệu thẻ tag thành công! ^_^", false));
  },

  /**
   * Get tag by _id
   * @param req
   * @param res
   */
  getOneTag: async (req, res) => {
    try {
      const {tagId} = req.params;
      const tag = await Tag.findById(tagId);
      return res.json(JsonResponse(tag, 200, "", false));
    } catch (error) {
      next(error)
    }
  },

  /**
   * Update Tag by _id
   * @param req
   * @param res
   */
  updateTag: async (req, res) => {
    try {
      const {tagId} = req.params;
      const newTag = req.body;
      const findTag = await Tag.find({
        name: newTag.name
      })
      if (Object.keys(findTag).length > 1) {
        return res.json(JsonResponse("", 403, "Name tag is exist", false))
      }
      return await Tag.findByIdAndUpdate(tagId, newTag, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        return res.json(JsonResponse(newTag, 200, "update tag success", false))
      })
    } catch (error) {
      next(error)
    }
  },

  /**
   * Delete Tag by _id
   * @param req
   * @param res
   */
  deleteTag: async (req, res) => {
    const {
      tagId
    } = req.params;
    return await Tag.findByIdAndRemove(tagId, (errors, data) => {
      if (errors) {
        res.json(JsonResponse("", 404, errors, true))
      }
      return res.send(JsonResponse("", 200, `Delete tag success`, false))
    })

  },

  getTagByQuestion: async (req, res) => {
    try {
      const {tagId} = req.params;
      const tag = await Tag.findById(tagId).populate('_question');
      if (errors) {
        res.json(JsonResponse("", 404, errors, false))
      }
      res.send(JsonResponse(tag._question, 200, "", false));
    } catch (error) {
      next(error)
    }
  }
}
