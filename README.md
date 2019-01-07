# r-system
# Note
* path của children router thì không cần "/". Ví dụ blogs là router con của admin thì không cần "/blogs" mà chỉ cần "blogs" thôi. 
```js
{
  path: "/admin",
  component: () =>
    import("./views/admin/dashboard/index"),
  children: [
    {
      path: "",
      name: 'admin',
      component: () =>
        import("./views/admin/dashboard/example")
    },
    {
      path: "blogs",      
      component: () =>
        import("./views/admin/blogs/index"),
      children: [
        {
          path: "",
          name: 'admin_blogs',
          component: () =>
            import("./views/admin/blogs/example")
        }
      ]
    }
  ]
}
```