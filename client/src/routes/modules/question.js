/** When your routing table is too long, you can split it into small modules**/
const questionRouter = {
  path: "/questions",
  component: () => import("@/views/question/index"),
  children: [
    {
      path: "",
      name: "question",
      component: () => import("@/views/question/example")
    },
    {
      path: "remind",
      name: "question-remind",
      component: () => import("@/views/question/question-remind")
    },
    {
      path: "create",
      name: "question-create",
      component: () => import("@/views/question/question-create")
    }
  ]
};

export default questionRouter;
