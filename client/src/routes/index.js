import Vue from "vue";
import Router from "vue-router";

import legaRouter from "./modules/lega";
import userRouter from "./modules/user";
import tagRouter from "./modules/tag";
import blogRouter from "./modules/blog";
import questionRouter from "./modules/question";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/views/homepage/index"),
      children: [
        {
          path: "",
          name: "homepage",
          component: () => import("@/views/homepage/homepage")
        }
      ]
    },
    {
      path: "/show-icon",
      component: () => import("@/components/icons/ShowAllIcon")
    },
    {
      path: "/show-icon-rank",
      component: () => import("@/components/icons/ShowIconRank")
    },
    {
      path: "/dashboard",
      component: () => import("@/views/dashboard/index"),
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("@/views/dashboard/example")
        }
      ]
    },
    {
      path: "/job",
      component: () => import("@/views/job/index"),
      children: [
        {
          path: "",
          name: "job",
          component: () => import("@/views/job/example")
        },
        {
          path: "list",
          // name: "list-job",
          component: () => import("@/views/job/list-jobs/index"),
          children: [
            {
              path: ":id",
              name: "job-detail",
              component: () => import("@/views/job/jobs-detail/index")
            },
          ]
        },
      ]
    },
    {
      path: "/signin",
      component: () => import("@/views/signin/index"),
      children: [
        {
          path: "",
          name: "signin",
          component: () => import("@/views/signin/signin")
        }
      ]
    },
    {
      path: "/signup",
      component: () => import("@/views/signup/index"),
      children: [
        {
          path: "",
          name: "signup",
          component: () => import("@/views/signup/signup")
        }
      ]
    },
    {
      path: "/admin",
      component: () => import("@/views/admin/dashboard/index"),
      children: [
        {
          path: "",
          name: "admin",
          component: () => import("@/views/admin/dashboard/example")
        },
        {
          path: "post",
          component: () => import("@/views/admin/post/index"),
          children: [
            {
              path: "",
              name: "admin_post",
              component: () => import("@/views/admin/post/example")
            }
          ]
        },
        {
          path: "categorys",
          component: () => import("@/views/admin/categorys/index"),
          children: [
            {
              path: "",
              name: "admin_categorys",
              component: () => import("@/views/admin/categorys/example")
            }
          ]
        },
        {
          path: "library",
          component: () => import("@/views/admin/library/index"),
          children: [
            {
              path: "",
              name: "admin_library",
              component: () => import("@/views/admin/library/example")
            }
          ]
        },
        {
          path: "pages",
          component: () => import("@/views/admin/pages/index"),
          children: [
            {
              path: "",
              name: "admin_pages",
              component: () => import("@/views/admin/pages/example")
            }
          ]
        },
        {
          path: "permission",
          component: () => import("@/views/admin/permission/index"),
          children: [
            {
              path: "",
              name: "admin_permission",
              component: () => import("@/views/admin/permission/example")
            }
          ]
        },
        {
          path: "rhelp",
          component: () => import("@/views/admin/rhelp/index"),
          children: [
            {
              path: "",
              name: "admin_rhelp",
              component: () => import("@/views/admin/rhelp/example")
            }
          ]
        },
        {
          path: "users",
          component: () => import("@/views/admin/users/index"),
          children: [
            {
              path: "",
              name: "admin_users",
              component: () => import("@/views/admin/users/example")
            }
          ]
        }
      ]
    },
    {
      path: "/discord",
      component: () => import("@/views/discord"),
      children: [
        {
          path: "",
          name: "discord-tutorial",
          component: () => import("@/views/discord/discord")
        },
        {
          path: "contact-discord",
          name: "contact-discord",
          component: () => import("@/views/discord/discord2")
        }
      ]
    },
    legaRouter,
    userRouter,
    tagRouter,
    blogRouter,
    questionRouter,
    {
      path: "/404",
      name: "notfound",
      component: () => import("@/views/404/index")
    },
    {
      path: "/500",
      name: "error",
      component: () => import("@/views/500/index")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
