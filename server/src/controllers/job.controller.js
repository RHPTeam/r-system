/**
 * create controller job for project
 * author: Sky Albert
 * date up: 21/01/2019
 * date to:
 * team: BE-RHP
 */
const Job = require('../models/job.model');
const User = require('../models/user.model');
const JsonResponse = require('../helpers/json-response');

module.exports = {
  /**
   * Name: Get All Job
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res, next) => {
    const query = req.query;
    await Job.find(query, (err, data) => {
      if (err) {
        return res.json(JsonResponse("", 404, err, true))
      }
      return res.json(JsonResponse(data, 200, "Lấy dữ liệu công việc thành công!", false))
    }).populate({
      path: "_createPerson",
      select: "nameDisplay avatar"
    })
  },

  /**
   * Name: Create Job By User
   * @param req
   * @param res
   * @param next
   * @Queries: userid (user Id)
   */

  create: async (req, res, next) => {
    const who = await User.findById(req.value.body._createPerson);
    const newJob = req.value.body;
    delete newJob._createPerson;

    const job = new Job(newJob);
    job._createPerson = who;
    await job.save();

    who._jobs.push(job);
    await who.save();

    res.json(JsonResponse("", 200, "Công việc tạo thành công! ^_^", false));
  },

  /**
   * Name: Update Job By User
   * @param req
   * @param res
   * @param next
   * @Queries: userid (user Id)
   */

  update: async (req, res, next) => {
    const { jobId } = req.value.params;
    const newJob = req.value.body;

    const data = await Job.findByIdAndUpdate(jobId, newJob);

    res.json(JsonResponse(data, 200, "Cập nhật thông tin công việc thành công! :D", false));
  },

  /**
   * Name: Delete Job By User
   * @param req
   * @param res
   * @param next
   * @Queries: userid (user Id)
   */

  delete: async (req, res, next) => {
    const { jobId } = req.value.params;

    const job = await Job.findById(jobId);
    if (!job) return res.json(JsonResponse("", 403, "Công việc này không tồn tại! :)", false));

    const who = await User.findById(job._createPerson)

    await job.remove();
    who._jobs.pull(job);
    await who.save();

    res.json(JsonResponse("", 200, "Xóa công việc thành công! T_T"));
  }
};

