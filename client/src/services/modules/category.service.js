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
    return Api().get("categories");
  }
  // create(user) {
  //   return Api().post("categories", user);
  // },
  // show(categoryId) {
  //   return Api().get(`categories/${categoryId}`);
  // },
  // update(user) {
  //   return Api().patch(`categories/${user._id}`, user);
  // },
  // delete(userId) {
  //   return Api().delete(`categories/${userId}`);
  // }
};
