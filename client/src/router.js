import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () =>
        import("./views/homepage/index"),
      children: [
        {
          path: "",
          name: 'homepage',
          component: () =>
            import("./views/homepage/example")
        }
      ]
    },
    {
      path: "/dashboard",
      component: () =>
        import("./views/dashboard/index"),
      children: [
        {
          path: "",
          name: 'dashboard',
          component: () =>
            import("./views/dashboard/example")
        }
      ]
    },
    {
      path: "/job",
      component: () =>
        import("./views/job/index"),
      children: [
        {
          path: "",
          name: 'job',
          component: () =>
            import("./views/job/example")
        }
      ]
    },
    {
      path: "/members",
      component: () =>
        import("./views/members/index"),
      children: [
        {
          path: "",
          name: 'members',
          component: () =>
            import("./views/members/example")
        }
      ]
    },
    {
      path: "/signin",
      component: () =>
        import("./views/signin/index"),
      children: [
        {
          path: "",
          name: 'signin',
          component: () =>
            import("./views/signin/example")
        }
      ]
    },
    {
      path: "/signup",
      component: () =>
        import("./views/signup/index"),
      children: [
        {
          path: "",
          name: 'signup',
          component: () =>
            import("./views/signup/example")
        }
      ]
    },
    {
      path: "/question",
      component: () =>
        import("./views/question/index"),
      children: [
        {
          path: "",
          name: 'question',
          component: () =>
            import("./views/question/example")
        }
      ]
    },
    {
      path: "/user",
      component: () =>
        import("./views/user/index"),
      children: [
        {
          path: "",
          name: 'user',
          component: () =>
            import("./views/user/example")
        }
      ]
    },
    {
      path: "/admin",
      component: () =>
        import("./views/admin/dashboard/index"),
      children: [
        {
          path: "",
          name: 'admin',
          component: () =>
            import("./views/admin/dashboard/example")
        },
        {
          path: "blogs",      
          component: () =>
            import("./views/admin/blogs/index"),
          children: [
            {
              path: "",
              name: 'admin_blogs',
              component: () =>
                import("./views/admin/blogs/example")
            }
          ]
        }
      ]
    }
  ]
});
