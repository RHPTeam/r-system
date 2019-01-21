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
  },
  create(user) {
    return Api().post("users", user);
  },
  show(userId) {
    return Api().get(`users/${userId}`);
  },
  update(user) {
    return Api().patch(`users/${user._id}`, user);
  },
  delete(userId) {
    return Api().delete(`users/${userId}`);
  }
};
