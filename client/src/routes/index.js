import Vue from "vue";
import Router from "vue-router";

import adminRouter from "./modules/admin";
import legaRouter from "./modules/lega";
import userRouter from "./modules/user";
import tagRouter from "./modules/tag";
import blogRouter from "./modules/blog";
import questionRouter from "./modules/question";
import jobRouter from "./modules/job";

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
    },
    adminRouter,
    legaRouter,
    userRouter,
    tagRouter,
    blogRouter,
    questionRouter,
    jobRouter
  ]
});
