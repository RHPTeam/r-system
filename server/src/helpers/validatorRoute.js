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
  schemas:
    {
      idSchema: Joi.object().keys({
        param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
      }),
      jobSchema:
        Joi.object().keys({
          _id: Joi.string(),
          position: Joi.string().min(5).max(50).required().label("Tiêu đề không được bỏ trống và nằm trong khoảng 5 - 50 ký tự!"),
          nameCompany: Joi.string().min(5).max(100).required().label("Tên công ty không được bỏ trống và nằm trong khoảng 5 - 100 ký tự!"),
          locationCompany: Joi.string().min(10).required().label("Địa chỉ không được bỏ trống và ít nhất 10 ký tự!"),
          content: Joi.string().min(100).required().label("Mô tả không được bỏ trống và ít nhất 100 ký tự!"),
          infoCompany: Joi.string().min(100).required().label("Thông tin Công ty không được bỏ trống và ít nhất 100 ký tự!"),
          website: Joi.string().min(10).required().label("Địa chỉ website không được bỏ trống và ít nhất 10 ký tự!"),
          office: Joi.string().min(10).required().label("Trường này không được bỏ trống và ít nhất 10 ký tự!"),
          salary: Joi.string().required(),
          type: Joi.string().required(),
          level: Joi.string().required(),
          role: Joi.string().required(),
          sizeCompany: Joi.string().required(),
          typeCompany: Joi.string().required(),
          technologies: Joi.string().required(),
          _createPerson: Joi.any(),
          __v: Joi.any()
        }),
      postSchema:
        Joi.object().keys({
          _id: Joi.string(),
          title: Joi.string().required().label('Tiêu đề không được bỏ trống!'),
          body: Joi.string().required().label('Nội dung không được bỏ trống!'),
          parent: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
          score: Joi.number().default(0),
          views: Joi.number().default(0),
          answerCount: Joi.number().default(0),
          commentCount: Joi.number().default(0),
          FavoriteCount: Joi.number().default(0),
          createAt: Joi.date().default(Date.now(), 'Time of Creation'),
          closedDate: Joi.date(),
          lastEditDate: Joi.date(),
          lastActivityDate: Joi.date(),
          _owner: Joi.any().required(),
          _tags: Joi.any(),
          __v: Joi.any()
        }),
      blogSchema:
        Joi.object().keys({
          _id: Joi.string(),
          title: Joi.string().min(10).max(75).required().label('Tiêu đề không được bỏ trống và nằm trong khoảng 10 - 75 ký tự!'),
          desc: Joi.string().min(100).required().label('Mô tả bài viết không được để trống và lớn hơn 100 ký tự!'),
          body: Joi.string().required().label('Nội dung không được bỏ trống!'),
          status: Joi.string().default('active'),
          image: Joi.string().required(),
          slug: Joi.string().required(),
          views: Joi.number().default(0),
          clap: Joi.number().default(0),
          createAt: Joi.date().default(Date.now, 'Time of Creation'),
          editAt: Joi.date().default(Date.now, 'Time of Edition'),
          _comments: Joi.any(),
          _author: Joi.any().required(),
          _category: Joi.any().required(),
          __v: Joi.any()
        }),
      categorySchema:
        Joi.object().keys({
          name: Joi.string().required().label("Tên danh mục bài viết không được bỏ trống!")
        }),
      commentSchema:
        Joi.object().keys({
          content: Joi.string().required().label("Nội dung bình luận không được bỏ trống!"),
          like: Joi.number().default(0),
          createAt: Joi.date().default(Date.now, 'Time of Creation'),
          editAt: Joi.date().default(Date.now, 'Time of Edition'),
          _user: Joi.any().required(),
          _blog: Joi.any(),
          _question: Joi.any(),
          _anwser: Joi.any(),
          __v: Joi.any()
        }).or('_blog', '_question', '_anwser'),
      userSchema:
        Joi.object().keys({
          userid: Joi.string().min(6).required().label("Tài khoản phải ít nhất từ 6 kí tự!"),
          nameDisplay: Joi.string().min(6).required().label("Tên hiển thị phải ít nhất 6 kí tự!"),
          email: Joi.string().email().required().label("Email phải thuộc valid của email!"),
          password: Joi.string().min(6).max(20).required().label("Mật khẩu phải ít nhất 6 ký tự và tối đa 20 ký tự!"),
          createAt: Joi.date().default(Date.now(), 'Time of Creation')
        }),
      userSignInSchema:
        Joi.object().keys({
          email: Joi.string().email().required().label("Email phải thuộc valid của email!"),
          password: Joi.string().min(6).max(20).required().label("Mật khẩu phải ít nhất 6 ký tự và tối đa 20 ký tự!")
        })
    }
};
