import Api from "@/services/Api";

/**
 *  Index: (Get All)
 *  Create: (Create ...)
 *  Update: (Update ...)
 *  Delete: (Delete ...)
 *  Show: (Get ... By BlogId)
 *
 *  GetByUser: (Get ... By User)
 *  CreateByUser: (Create ... By User)
 *
 *  GetByCategory: (Get ... By Category)
 *
 *  GetByComment: (Get ... By Comment)
 */

export default {
  index() {
    return Api().get("blogs");
  },
  create(blog) {
    return Api().post("blogs", blog);
  },
  show(blogId) {
    return Api().get(`blogs/blogId=${blogId}`);
  },
  update(blogId) {
    return Api().patch(`blogs/blogId=${blogId}`);
  },
  delete(blogId) {
    return Api().delete(`blogs/blogId=${blogId}`);
  },
  getByUser(userId) {
    return Api().get(`blogs/userId=${userId}`);
  },
  createByUser(userId, categoryId, blog) {
    return Api().post(`blogs/userId=${userId}&categoryId=${categoryId}`, blog);
  },
  getByCategory(categoryId) {
    return Api().get(`blogs/category/${categoryId}`);
  }

  //getByComment?
};
