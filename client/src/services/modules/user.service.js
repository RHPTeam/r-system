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
    return Api().get(`users?_id=${userId}`);
  },
  update(user, userId) {
    return Api().patch(`users/${user._id}?_userId=${userId}`, user);
  },
  delete(userId) {
    return Api().delete(`users/${userId}`);
  },
  signUp(user) {
    return Api().post("signup", user);
  },
  signIn(user) {
    return Api().post("signin", user);
  }
};
