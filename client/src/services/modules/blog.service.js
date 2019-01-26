import Api from "@/services/Api";

/**
 *  Index: (Get All)
 *  Update: (Update ...)
 *  Delete: (Delete ...)
 *  Show: (Get ... By BlogId)
 *
 *  CreateByUser: (Create ... By User)
 *  GetByUser: (Get ... By User)
 *
 *  GetByCategory: (Get ... By Category)
 *
 *  GetByComment: (Get ... By Comment)
 */

export default {
  index() {
    return Api().get("blogs");
  },
  show(blogId) {
    return Api().get(`blogs?_id=${blogId}`);
  },
  update(blog, userId) {
    return Api().patch(`blogs/${blog._id}?_userId=${userId}`, blog);
  },
  delete(blogId, userId) {
    return Api().delete(`blogs/${blogId}?_userId=${userId}`);
  },
  create(blog) {
    return Api().post(`blogs`, blog);
  },
  getByUser(userId) {
    return Api().get(`blogs?_author=${userId}`);
  },
  getByCategory(categoryId) {
    return Api().get(`blogs?_category=${categoryId}`);
  }
};
