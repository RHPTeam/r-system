/**
 * create controller job for project
 * author: Sky Albert
 * date up: 21/01/2019
 * date to:
 * team: BE-RHP
 */
const Job = require('../models/job.model')
const User = require('../models/user.model')
const JsonResponse = require('../helpers/json-response')

module.exports = {
  /**
   * Name: Get All Job
   * @param req
   * @param res
   * @param next
   */
  index: async (req, res, next) => {
    const query = req.query
    await Job.find(query, (err, data) => {
      if (err) {
        return res.status(404).json(JsonResponse('', 404, err, true))
      }
      return res.status(200).json(JsonResponse(data, 200, 'Lấy dữ liệu công việc thành công!', false))
    }).populate({
      path: '_createPerson',
      select: 'nameDisplay avatar'
    })
  },

  /**
   * Name: Create Job By User
   * @param req
   * @param res
   * @param next
   * @Queries: userid (user Id)
   * Note: A User just can create 3 job new. If user want create more, need permission higher :))
   */

  create: async (req, res, next) => {
    const who = await User.findById(req.value.body._createPerson)
    console.log(who._jobs)
    console.log(who._jobs.length)
    if (who._jobs.length > 3) return res.status(405).json(JsonResponse('', 405, 'Bạn đã đạt mốc giới hạn số lượng tạo công việc là 3! <3', true))

    const newJob = req.value.body
    delete newJob._createPerson

    const job = new Job(newJob)
    job._createPerson = who
    await job.save()

    who._jobs.push(job)
    await who.save()

    res.status(200).json(JsonResponse('', 200, 'Công việc tạo thành công! ^_^', false))
  },

  /**
   * Name: Update Job By User
   * @param req
   * @param res
   * @param next
   * @Queries: userid (user Id)
   */

  update: async (req, res, next) => {
    const { jobId } = req.value.params
    const newJob = req.value.body
    const userId = req.query._userId

    if (!userId) return res.status(403).json(JsonResponse('', 403, 'Vui lòng xác thực quyền người tạo công việc!', true))

    const job = await Job.findById(jobId)
    if (!job) return res.status(403).json(JsonResponse('', 403, 'Công việc này không tồn tại! :)', true))

    // Check is _createPerson
    if (userId != job._createPerson._id) return res.status(403).json(JsonResponse('', 403, 'Bạn không phải người tạo câu hỏi này!', true))

    const data = await Job.findByIdAndUpdate(jobId, { $set: newJob }, { new: true })

    res.status(200).json(JsonResponse(data, 200, 'Cập nhật thông tin công việc thành công! :D', false))
  },

  /**
   * Name: Delete Job By User
   * @param req
   * @param res
   * @param next
   * @Queries: userid (user Id)
   */

  delete: async (req, res, next) => {
    const { jobId } = req.value.params
    const userId = req.query._userId
    const who = await User.findById(userId)

    if (!userId) return res.status(403).json(JsonResponse('', 403, 'Vui lòng xác thực quyền người tạo công việc!', true))

    const job = await Job.findById(jobId)
    if (!job) return res.status(403).json(JsonResponse('', 403, 'Công việc này không tồn tại! :)', true))

    // Check is _createPerson
    if (userId != job._createPerson._id) return res.status(403).json(JsonResponse('', 403, 'Bạn không phải người tạo câu hỏi này!', true))

    await job.remove()
    who._jobs.pull(job)
    await who.save()

    res.status(200).json(JsonResponse('', 200, 'Xóa công việc thành công! T_T', false))
  }
}

