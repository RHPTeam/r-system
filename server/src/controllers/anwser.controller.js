/**
 * create controller Anwser for project
 * author: quangnc
 * date up: 16/01/2019
 * date to: 17/01/2019
 * team: BE-RHP
 */
const omit = require('lodash/omit');
const split = require('lodash/split');
const forEach = require('lodash/forEach');

const Anwser = require('../models/anwser.model');
const JsonResponse = require('../helpers/json-response')

const includes = {
  user: "user",
  question: "question",
  vote: "vote"
}

module.exports = {
  /**
   * create Anwser
   * @param req
   * @param res
   * @param next
   */
  createAnwser: async (req, res, next) => {
    try {
      const data_anwser = req.body;
      if (!data_anwser.content) {
        return res.json(JsonResponse("", 403, "Content Anwser is require", false))
      }

      const anwser = await new Anwser(data_anwser);
      anwser.save((errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false));
        }
        return res.json(JsonResponse(data, 200, "create Anwser success", false));
      })
    } catch (error) {
      next(err)
    }
  },

  /**
   * Get all Anwser
   * @param req
   * @param res
   * @param next
   */
  getAllAnwser: async (req, res, next) => {
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
      return await Anwser.find(omit(query, ['_includes']))
        .populate(include)
        .exec((errors, data) => {
          if (errors) {
            return res.json(JsonResponse("", 401, errors, false))
          }
          return res.json(JsonResponse(data, 200, "", false))
        });
    } catch (error) {
      next(error)
    }
  },

  /**
   * Get one Anwser
   * @param req
   * @param res
   * @param next
   */
  getOneAnwser: async (req, res, next) => {
    try {
      return res.json(JsonResponse(req.anwser, 200, "", false))
    } catch (error) {
      next(next)
    }
  },

  /**
   * update Anwser by id 
   * @param req
   * @param res
   * @param next
   */
  updateAnwser: async (req, res, next) => {
    try {
      const {
        anwser,
        body
      } = req;
      if (!body.content) {
        return res.json(JsonResponse("", 403, "Content Anwser is require", false))
      }
      return await anwser.updateOne(body, (errors, data) => {
        if (errors) {
          return res.json(JsonResponse("", 404, errors, false))
        }
        res.json(JsonResponse("", 200, `update user success`, false))
      })
    } catch (error) {
      next(error)
    }
  },

  /**
   * delete Anwser by id
   * @param req
   * @param res
   * @param next
   */
  deleteAnwser: async (req, res, next) => {
    try {
      return await Anwser.deleteOne(req.anwser, err => {
        if (err) {
          res.json(JsonResponse("", 404, errors, false))
        }
        res.send(JsonResponse("", 200, `Delete anwser ${req.anwser.name}`, false))
      })
    } catch (error) {
      next(error);
    }
  },

  /**
   * get Anwser by id
   * @param req
   * @param res
   * @param next
   * @param id
   */
  getByIdAnwser: async (req, res, next, id) => {
    try {
      const anwser = await Anwser.findById({
        _id: id
      })
      .populate(`_${req.query._includes}`);;
      if (!anwser) {
        return res.json(JsonResponse("", 404, `Anwser doesn't exist`, false));
      }
      req.anwser = anwser;
      next();
    } catch (error) {
      next(error)
    }
  },
}

