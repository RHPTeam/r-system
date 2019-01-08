/** When your routing table is too long, you can split it into small modules**/
const userRouter = {
  path: "/blog",
  component: () => import("@/views/blog/index"),
  children: [
    {
      path: "",
      name: "blog-home",
      component: () => import("@/views/blog/blog")
    },
    {
      path: "posts",
      name: "posts",
      component: () => import("@/views/blog/posts")
    },
    {
      path: "posts/:id",
      name: "post",
      component: () => import("@/views/blog/post")
    },
    {
      path: "categories/:id",
      name: "posts-category",
      component: () => import("@/views/blog/posts-category")
    }
  ]
};

export default userRouter;
