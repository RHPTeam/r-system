/** When your routing table is too long, you can split it into small modules**/
const userRouter = {
  path: "/blog",
  component: () => import("@/views/blog/index"),
  children: [
    {
      path: "",
      name: "blog-home",
      component: () => import("@/views/blog/home")
    },
    {
      path: "posts/:blogId",
      props: true,
      name: "post",
      component: () => import("@/views/blog/detail")
    },
    {
      path: "categories/:categoryId",
      name: "categories",
      component: () => import("@/views/blog/category")
    }
  ]
};

export default userRouter;
