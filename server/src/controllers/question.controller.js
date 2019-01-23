
/**
 * create controller question for project
 * author: quangnc 
 * date up: 15/01/2019
 * date to: 16/01/2019
 * team: BE-RHP
 */
const omit = require('lodash/omit');
const split = require('lodash/split');
const forEach = require('lodash/forEach');

const Question = require('../models/question.model');
const Tag = require('../models/tag.model');
const Anwser = require('../models/anwser.model');
const JsonResponse = require('../helpers/json-response')

const includes = {
  user: "user",
  tag: "tag",
  anwser: "anwser",
  vote: "vote"
}

module.exports = {
  /**
   * create Question
   * @param req
   * @param res
   * @param next
   */
  createQuestion: async (req, res, next) => {
    try {
      const data = req.body;
      const question = await new Question({
        name: data.name,
        content: data.content,
        status: false,
        createdDate: new Date()
      });
      question.save((errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "create Question success", false));
      })
    } catch (error) {
      next(error);
    }
  },

  /**
   * Get all Questions
   * @param req
   * @param res
   * @param next
   * localhost:8888/api/v1/questions?_includes=tags&content=quangnc
   */
  getAllQuestions: async (req, res, next) => {
    try {
      const {
        query,
      } = req;
      const include = []
      forEach(split(query._includes, ','), i => {
        if (includes[i]) {
          include.push(includes[i]);
        }
      });
      const question = await Question
        .find(omit(query, ['_includes']))
        .populate(include)
        .exec();
      res.json(JsonResponse(question, 200, "", false))
    } catch (error) {
      next(error);
    }
  },

  /**
   * Get one Question
   * @param req
   * @param res
   * @param next
   * localhost:8888/api/v1/questions/5c40cfa476ecf70d00fb1842?_includes=tags
   */
  getOneQuestion: async (req, res, next) => {
    try {
      res.json(JsonResponse(req.question, 200, "", false))
    } catch (error) {
      next(error);
    }
  },

  /**
   * update Question by id 
   * @param req
   * @param res
   * @param next
   */
  updateQuestion: async (req, res, next) => {
    try {
      const {
        question,
        body
      } = req;
      body.editDate = new Date();
      return await question.updateOne(body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, "update question success", false))
      })
    } catch (error) {
      next(error);
    }
  },

  /**
   * delete Question by id
   * @param req
   * @param res
   * @param next
   */
  deleteQuestion: async (req, res, next) => {
    try {
      return await req.question.remove(err => {
        if (err) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete question ${req.question.name}`, false))
      })
    } catch (error) {
      next(error);
    }
  },

  /**
   * get Question by id
   * @param req
   * @param res
   * @param next
   * @param id
   * localhost:8888/api/v1/questions/5c40cfa476ecf70d00fb1842?_includes=tags
   */
  getByIdQuestion: async (req, res, next, id) => {
    try {
      const question = await Question.findById({
          _id: id
        })
        .populate(`_${req.query._includes}`);
      if (!question) {
        return res.json(JsonResponse("", 404, `Question doesn't exist`, false));
      }
      req.question = question;
      next();
    } catch (error) {
      next(error);
    }
  },

  createQuestionPopulate: async (req, res, next) => {
    try {
      const {
        query
      } = req;
      const question = await Question.findById(req.question._id);
      switch (query._includes) {
        case "tags":
          const tag = await new Tag(req.body);
          tag._questions = question;
          await tag.save();
          question._tags.push(tag._id);
          break;
        case "anwsers":
          const anwser = await new Anwser(req.body);
          anwser._question = question;
          anwser.save();
          question._anwsers.push(anwser._id);
          break;
        default:
          return res.json(JsonResponse("", 404, `error query`, false))
      }
      await question.save((err, data) => {
        if (err) {
          return next(JsonResponse("", 404, `error`, false))
        }
        res.json(JsonResponse("", 200, "Create success", false))
      })
    } catch (error) {
      next(error)
    }
  },
  /**
   * localhost:8888/api/v1/questions/5c40cfa476ecf70d00fb1842/populate?_includes=tags&_id=5c40da73c30d5d0f3fecd6d9
   * id first: id of questions, id second: id of tag (Just only example not static link)
   * Note: when delete questions have to includes=...
   */
  deleteQuestionPopulate: async (req, res, next) => {
    try {
      const {
        query,
        question
      } = req;
      // kiem tra query co _includes and _id ?
      // ....

      switch (query._includes) {
        case "tags":
          const checkTag = await question._tags && question._tags.map(i => i._id.toString() === query._id.toString())
          if (!checkTag) {
            return next(JsonResponse("", 404, `Tag not found in Question`, false))
          }
          await question._tags.remove(query._id);
          break;
        case "anwsers":
          let checkAnwser = await question._anwsers && question._anwsers.map(i => i._id.toString() === query._id.toString())
          if (!checkAnwser) {
            return next(JsonResponse("", 404, `Anwser not found in Question`, false))
          }
          await question._anwsers.remove(query._id);
          break;
        default:
          return
      }
      await question.save((err, data) => {
        if (err) {
          return next(JsonResponse("", 404, `error`, false))
        }
        res.json(JsonResponse("", 200, "Delete success", false))
      })
    } catch (error) {
      next(error)
    }
  },

}

