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
        },
        {
          path: "lol",
          name: 'homepage',
          component: () =>
            import("./views/homepage/example2")
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
    }
  ]
});
