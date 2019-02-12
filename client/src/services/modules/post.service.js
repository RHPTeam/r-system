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
    return Api().get("posts");
  }
  // getJobsByUser(userId) {
  //   return Api().get(`jobs?_createPerson=${userId}`);
  // },
  create(post) {
    return Api().post("posts", post);
  }
  // show(jobId) {
  //   return Api().get(`jobs?_id=${jobId}`);
  // },
  // update(job, userId) {
  //   return Api().patch(`jobs/${job._id}?_userId=${userId}`, job);
  // },
  // delete(jobId, userId) {
  //   return Api().delete(`jobs/${jobId}?_userId=${userId}`);
  // }
};
