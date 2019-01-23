const Joi = require('joi')
const JsonResponse = require('./json-response')

module.exports = {
  validateParam: (schema, name) => {
    return (req, res, next) => {
      const result = Joi.validate({param: req['params'][name]}, schema)
      if (result.error) {
        return res.status(400).json(result.error)
      } else {
        if (!req.value) {
          req.value = {}
        }
        if (!req.value['params']) {
          req.value['params'] = {}
        }
        req.value['params'][name] = result.value.param
        next()
      }
    }
  },
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema)
      if (result.error) {
        return res.json(JsonResponse("", 403, "Có lỗi xảy ra! Vui lòng thử lại! " + result.error, true))
      } else {
        if (!req.value) { req.value = {} }
        if (!req.value['body']) { req.value['body'] = {} }
        req.value['body'] = result.value
        next()
      }
    }
  },

  /**
   * Schema Define validator
   */
  schemas: {
    idSchema: Joi.object().keys({
      param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }),
    jobSchema: Joi.object().keys({
      position: Joi.string().min(5).max(50).required(),
      nameCompany: Joi.string().min(5).max(100).required(),
      locationCompany: Joi.string().min(10).required(),
      salary: Joi.string().required(),
      type: Joi.string().required(),
      level: Joi.string().required(),
      role: Joi.string().required(),
      office: Joi.string().min(10).required(),
      sizeCompany: Joi.string().required(),
      typeCompany: Joi.string().required(),
      technologies: Joi.string().required(),
      content: Joi.string().min(100).required(),
      _createPerson: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      infoCompany: Joi.string().min(100).required(),
      website: Joi.string().min(10).required()
    }),
    postSchema: Joi.object().keys({
      parent: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      score: Joi.number().required(),
      views: Joi.number().required(),
      body: Joi.string().required(),
      _owner: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      lastEditDate: Joi.date().required(),
      lastActivityDate: Joi.date().required(),
      title: Joi.string().required(),
      _tags: Joi.array().required(),
      answerCount: Joi.number().required(),
      commentCount: Joi.number().required(),
      FavoriteCount: Joi.number().required(),
      closedDate: Joi.date().required()
    }),
    tagSchema: Joi.object().keys({
      name: Joi.string().min(5).max(100).required(),
      desc: Joi.string().min(3).max(100).required(),
      _question: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    }),
    blogSchema: Joi.object().keys({
      title: Joi.string().required(),
      desc: Joi.string().required(),
      body: Joi.string().required(),
      clap: Joi.number().required(),
      createAt: Joi.date().required(),
      editAt: Joi.date().required(),
      _author: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      _category: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      _comments: Joi.array().required(),
    }),
    favoriteSchema: Joi.object().keys({
      _question: Joi.array().required(),
      _anwser: Joi.array().required(),
      _blog: Joi.array().required(),
      _user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    }),
    commentSchema: Joi.object().keys({
      content:  Joi.string().required(),
      _blog: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      _user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      _reputation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      _question: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      _anwser: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    })

  }
}
