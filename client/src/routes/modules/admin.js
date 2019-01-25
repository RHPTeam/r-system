/** When your routing table is too long, you can split it into small modules**/
const adminRouter = {
  path: "/admin",
  component: () => import("@/views/admin/index"),
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
          component: () => import("@/views/admin/categorys/content")
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
};

export default adminRouter;
