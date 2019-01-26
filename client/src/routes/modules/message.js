/** When your routing table is too long, you can split it into small modules**/
const messageRouter = {
  path: "/message",
  component: () => import("@/views/message/index"),
  children: [
    {
      path: "",
      name: "message-home",
      component: () => import("@/views/message/home")
    }
  ]
};

export default messageRouter;
