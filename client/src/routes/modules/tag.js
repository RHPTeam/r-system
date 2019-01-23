/** When your routing table is too long, you can split it into small modules**/
const tagRouter = {
  path: "/tags",
  name: "tags",
  component: () => import("@/views/tag")
};

export default tagRouter;
