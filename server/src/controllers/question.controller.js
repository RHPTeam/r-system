/**
 * create controller question for project
 * author: quangnc 
 * date up: 15/01/2019
 * date to: 16/01/2019
 * team: BE-RHP
 */
const Question = require('../models/question.model');
const JsonResponse = require('../helpers/json-response')

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
   */
  getAllQuestions: async (req, res, next) => {
    try {
      return await Question.find({}, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "", false));
      });

    } catch (error) {
      next(error);
    }
  },

  /**
   * Get one Question
   * @param req
   * @param res
   * @param next
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
   */
  getByIdQuestion: async (req, res, next, id) => {
    try {
      const question = await Question.findById({
        _id: id
      });
      if (!question) {
        return res.json(JsonResponse("", 404, `Question doesn't exist`, false));
      }
      req.question = question;
      next();
    } catch (error) {
      next(error);
    }
  },
}
