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
        return res.status(405).json(JsonResponse("", 405, result.error, true))
      } else {
        if (!req.value) {
          req.value = {}
        }
        if (!req.value['body']) {
          req.value['body'] = {}
        }
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
      position: Joi.string().min(5).max(50).required().label("Vị trí công việc độ dài từ 5 đến 50 kí tự!"),
      nameCompany: Joi.string().min(5).max(100).required().label("Tên công ty độ dài từ 5 đến 100 kí tự!"),
      locationCompany: Joi.string().min(10).required().label("Địa chỉ công ty độ dài tối thiểu từ 10 kí tự"),
      salary: Joi.string().required().label("Lương không được để trống!"),
      type: Joi.string().required(),
      level: Joi.string().required(),
      role: Joi.string().required(),
      office: Joi.string().min(10).required().label("Loại công ty độ dài tối thiểu từ 10 kí tự!"),
      sizeCompany: Joi.string().required(),
      typeCompany: Joi.string().required(),
      technologies: Joi.string().required().label("Công nghệ yêu cầu không được để trống!"),
      content: Joi.string().min(100).required().label("Nội dung không được để trống!"),
      _createPerson: Joi.any().required(),
      infoCompany: Joi.string().min(100).required().label("Thông tin công ty độ dài từ 10 kí tự!"),
      cultureCompany: Joi.string().min(100).required().label("Văn hóa công ty độ dài tối thiểu từ 100 kí tự!"),
      website: Joi.string().min(10).required().label("Website độ dài tối thiểu từ 10 kí tự!")
    }),
    postSchema: Joi.object().keys({
      parent: Joi.string().required(),
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
    blogSchema: Joi.object().keys({
      _id: Joi.string(),
      title: Joi.string().min(10).max(75).required().label("Tiêu đề không được bỏ trống và nằm trong khoảng 10 - 75 ký tự!"),
      desc: Joi.string().min(100).required().label("Mô tả bài viết không được để trống và lớn hơn 100 ký tự!"),
      body: Joi.string().required().label("Nội dung không được bỏ trống!"),
      clap: Joi.number().default(0),
      createAt: Joi.date().default(Date.now, 'Time of Creation'),
      editAt: Joi.date().default(Date.now, 'Time of Edition'),
      status: Joi.string().default('active'),
      image: Joi.string().required(),
      slug: Joi.string().required(),
      views: Joi.number().default(0),
      _comments: Joi.any(),
      _author: Joi.any().required(),
      _category: Joi.any().required(),
      __v: Joi.any()
    }),
    categorySchema: Joi.object().keys({
      name: Joi.string().required().label("Tên danh mục bài viết không được bỏ trống!")
    })
  }
};
