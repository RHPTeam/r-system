
const Tag = require('../models/tag.model');
const JsonResponse = require('../helpers/json-response')

findTagByName = async data => {
  try {
    return await Tag.find()
      .or([{
        name: data.name
      }])
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  /**
   * create tag
   * @param req
   * @param res
   */
  createTag: async (req, res) => {
    try {
      const data_tag = req.body;
      if (!data_tag.name) {
        return res.json(JsonResponse("", 403, "Name tag is require", false))
      }

      const findTag = await Tag.find({
        name: data_tag.name
      })
      if (Object.keys(findTag).length > 0) {
        return res.json(JsonResponse("", 403, "Name tag is exist", false))
      }

      const tag = await new Tag(data_tag);
      tag.save((errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "create tag success", false));
      })
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Get All Tags
   * @param req
   * @param res
   */
  getAllTags: async (req, res) => {
    try {
      return await Tag.find({}, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "", false));
      });
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * Get tag by _id
   */
  getOneTag: async (req, res) => {
    try {
      const {tagId} = req.params;
      const tag = await Tag.findById(tagId);
      return res.json(JsonResponse(tag, 200, "", false));
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  },

  /**
   * Delete Tag by _id
   * @param req
   * @param res
   */
  deleteTag: async (req, res) => {
    try {
      const {
        tagId
      } = req.params;
      return await Tag.findByIdAndRemove(tagId, (errors, data) => {
        if (errors) {
          res.json(JsonResponse("", 404, errors, false))
        }
        return res.send(JsonResponse("", 200, `Delete tag success`, false))
      })

    } catch (error) {
      console.log(error);
    }
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
      console.log(error);
    }
  }


}
