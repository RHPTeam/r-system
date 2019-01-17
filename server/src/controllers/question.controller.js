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
   */
  createQuestion: async (req, res) => {
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
      console.log(error)
    }
  },

  /**
   * Get all Questions
   * @param req
   * @param res
   */
  getAllQuestions: async (req, res) => {
    try {
      return await Question.find({}, (errors, data) => {
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
   * Get one Question
   * @param req
   * @param res
   */
  getOneQuestion: async (req, res) => {
    try {
      return res.json(JsonResponse(req.question, 200, "", false))
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * update Question by id 
   * @param req
   * @param res
   */
  updateQuestion: async (req, res) => {
    try {
      const {
        question,
        body
      } = req;
      body.editDate = new Date();
      return await Question.findByIdAndUpdate({
        _id: question._id
      }, body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, "update question success", false))
      })
    } catch (error) {

    }
  },

  /**
   * delete Question by id
   * @param req
   * @param res
   */
  deleteQuestion: async (req, res) => {
    try {
      return await Question.deleteOne(req.question, err => {
        if (err) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete question ${req.question.name}`, false))
      })
    } catch (error) {
      console.log(error);
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
      console.log(error)
    }
  },
}
