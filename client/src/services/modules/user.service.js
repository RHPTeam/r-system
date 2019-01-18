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
    return Api().get("users");
  }
  // create(project) {
  //   return Api().post("projects", project);
  // },
  // show(projectId) {
  //   return Api().get(`projects/${projectId}`);
  // },
  // update(project) {
  //   return Api().patch(`projects/${project._id}`, project);
  // },
  // delete(projectId) {
  //   return Api().delete(`projects/${projectId}`);
  // }
};
