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
  getJobsByUser(userId) {
    return Api().get(`jobs?_createPerson=${userId}`);
  },
  create(job) {
    return Api().post("jobs", job);
  },
  show(jobId) {
    return Api().get(`jobs?_id=${jobId}`);
  },
  // update(user) {
  //   return Api().patch(`users/${user._id}`, user);
  // },
  delete(jobId, userId) {
    return Api().delete(`jobs/${jobId}?_userId=${userId}`);
  }
};
