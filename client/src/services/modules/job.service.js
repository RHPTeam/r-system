import Api from "@/services/Api";

/**
 *  Index: (Get All)
 *  Create: (Create ...)
 *  Update: (Update ...)
 *  Delete: (Delete ...)
 *  Show: (Get ... By Id)
 */

export default {
  index() {
    return Api().get("jobs");
  },
  create(job) {
    return Api().post("jobs", job);
  },
  show(jobId) {
    return Api().get(`jobs?_id=${jobId}`);
  },
  update(job) {
    return Api().patch(`jobs/${job._id}`, job);
  },
  delete(jobId) {
    return Api().delete(`jobs/${jobId}`);
  }
};
