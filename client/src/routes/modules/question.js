/** When your routing table is too long, you can split it into small modules**/
const questionRouter = {
  path: "/questions",
  component: () => import("@/views/question/index"),
  children: [
    {
      path: "",
      name: "question-list",
      component: () => import("@/views/question/question-list")
    },
    {
      path: "remind",
      name: "question-remind",
      component: () => import("@/views/question/question-remind")
    },
    {
      path: ":id",
      name: "question-details",
      component: () => import("@/views/question/post-question/question-detail")
    }
  ]
};

export default questionRouter;
