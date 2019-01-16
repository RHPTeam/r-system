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
              name: "user-profile-edit",
              component: () =>
                import("@/views/user/user-info/user-info-setting/user-info")
            },
            {
              path: "job",
              name: "user-job-edit",
              component: () =>
                import("@/views/user/user-info/user-info-setting/user-job")
            }
          ]
        }
      ]
    }
  ]
};

export default userRouter;
