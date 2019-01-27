/** When your routing table is too long, you can split it into small modules**/
const questionRouter = {
  path: "/questions",
  component: () => import("@/views/question/index"),
  children: [
    {
      path: "",
      name: "question-list",
      component: () => import("@/views/question/question-list/index")
    },
    {
      path: "remind",
      name: "question-remind",
      component: () => import("@/views/question/question-remind/index")
    },
    {
      path: "create",
      name: "question-create",
      component: () => import("@/views/question/question-create/index")
    },
    {
      path: ":id",
      name: "question-details",
      component: () => import("@/views/question/question-details/index")
    }
  ]
};

export default questionRouter;
