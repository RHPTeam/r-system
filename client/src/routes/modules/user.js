/** When your routing table is too long, you can split it into small modules**/
const userRouter = {
  path: "/users",
  component: () => import("@/views/user/index"),
  children: [
    {
      path: "",
      name: "user-list",
      component: () => import("@/views/user/user-list/index")
    },
    {
      path: ":id",
      props: true,
      component: () => import("@/views/user/user-info/index"),
      children: [
        {
          path: "",
          component: () => import("@/views/user/user-info/user-info-profile")
        },
        {
          path: "profile",
          name: "user-info-profile",
          component: () => import("@/views/user/user-info/user-info-profile")
        },
        {
          path: "activity",
          name: "user-info-activity",
          component: () => import("@/views/user/user-info/user-info-activity")
        },
        {
          path: "story",
          name: "user-info-story",
          component: () => import("@/views/user/user-info/user-info-story")
        },
        {
          path: "blog",
          name: "user-info-blog",
          component: () => import("@/views/user/user-info/user-info-blog")
        },
        {
          path: "settings",
          component: () => import("@/views/user/user-info/user-info-setting"),
          children: [
            {
              path: "",
              component: () =>
                import("@/views/user/user-info/user-info-setting/user-info")
            },
            {
              path: "profile",
              name: "user-setting-info",
              component: () =>
                import("@/views/user/user-info/user-info-setting/user-info")
            },
            {
              path: "story",
              name: "user-setting-story",
              component: () =>
                import("@/views/user/user-info/user-info-setting/user-story")
            },
            {
              path: "job",
              name: "user-setting-job",
              component: () =>
                import("@/views/user/user-info/user-info-setting/user-job")
            },
            {
              path: "tag",
              name: "user-setting-tag",
              component: () =>
                import("@/views/user/user-info/user-info-setting/user-tag")
            }
          ]
        }
      ]
    }
  ]
};

export default userRouter;
