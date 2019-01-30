import Api from "@/services/Api";

/**
 *  Index: (Get All)
 *  Create: (Create ...)
 *  Update: (Update ...)
 *  Delete: (Delete ...)
 *  Show: (Get ... By Comment Id)
 *  GetByBlog: (Get ... By Blog ID)
 *  GetByUser: (Get ... By User Id)
 */

export default {
  index() {
    return Api().get("comments");
  },
  create(comment) {
    return Api().post("comments", comment);
  },
  show(commentId) {
    return Api().get(`comments?_id=${commentId}`);
  },
  update(comment, userId) {
    return Api().patch(`comments/${comment._id}?_userId=${userId}`, comment);
  },
  delete(commentId, userId) {
    return Api().delete(`comments/${commentId}?_userId=${userId}`);
  },
  getByBlog(BlogId) {
    return Api().get(`comments?_blog=${BlogId}`);
  },
  getByUser(userId) {
    return Api().get(`comments?_user=${userId}`);
  }
};
