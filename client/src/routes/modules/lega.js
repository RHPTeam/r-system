/** When your routing table is too long, you can split it into small modules**/
const legaRouter = {
  path: "/lega",
  component: () => import("@/views/lega/index"),
  redirect:{
    name:"lega-public-start"
  },
  children: [
    {
      path: "",
      name: "lega-public-start",
      component: () => import("@/views/lega/public")
    },
    {
      path: "public",
      name: "lega-public",
      component: () => import("@/views/lega/public")
    },
    {
      path: "private",
      name: "lega-private",
      component: () => import("@/views/lega/private")
    },
    {
      path: "privacy-policy",
      name: "lega-privacy",
      component: () => import("@/views/lega/privacy-policy")
    },
    {
      path: "cookie",
      name: "lega-cookie",
      component: () => import("@/views/lega/cookie")
    },
    {
      path: "contact",
      name: "lega-contact",
      component: () => import("@/views/lega/contact")
    },
    {
      path: "due",
      component: () => import("@/views/lega/due-index"),
      children: [
        {
          path: "",
          name: "due-start",
          component: () => import("@/views/lega/due")
        },
        {
          path: "data-security",
          name: "due-data-security",
          component: () => import("@/views/lega/due-data-security")
        },
        {
          path: "data-subjects",
          name: "due-data-subjects",
          component: () => import("@/views/lega/due-data-subjects")
        },
        {
          path: "data-controllers",
          name: "due-data-controllers",
          component: () => import("@/views/lega/due-data-controllers")
        },
        {
          path: "data-processors",
          name: "due-data-processors",
          component: () => import("@/views/lega/due-data-processors")
        }
      ]
    }
  ]
};

export default legaRouter;
