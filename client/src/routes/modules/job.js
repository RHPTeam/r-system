/** When your routing table is too long, you can split it into small modules**/
const jobRouter = {
  path: "/jobs",
  component: () => import("@/views/job/index"),
  children: [
    {
      path: "",
      name: "job-list",
      component: () => import("@/views/job/job-list/index")
    },
    {
      path: ":id",
      name: "job-details",
      component: () => import("@/views/job/job-details/index")
    }
  ]
};

export default jobRouter;
