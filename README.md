# r-system
# Note
* path của children router thì không cần "/". Ví dụ pots là router con của admin thì không cần "/pots" mà chỉ cần "pots" thôi. 
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
      path: "pots",      
      component: () =>
        import("./views/admin/pots/index"),
      children: [
        {
          path: "",
          name: 'admin_pots',
          component: () =>
            import("./views/admin/pots/example")
        }
      ]
    }
  ]
}
```