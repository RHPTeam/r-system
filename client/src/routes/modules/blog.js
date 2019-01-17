/** When your routing table is too long, you can split it into small modules**/
const userRouter = {
    path: "/blog",
    component: () =>
        import ("@/views/blog/index"),
    children: [{
            path: "",
            name: "blog-home",
            component: () =>
                import ("@/views/blog/blog")
        },
        {
            path: "posts/:id",
            name: "post",
            component: () =>
                import ("@/views/blog/blog-detail")
        },
        {
            path: "categories",
            name: "posts-category",
            component: () =>
                import ("@/views/blog/posts-category")
        }
    ]
};

export default userRouter;