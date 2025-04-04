export const adminRoutes = [
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/admin/AdminHomeView.vue"),
    redirect: "/admin/catalogue",
    children: [
      {
        path: "catalogue",
        name: "admin-catalogue",
        component: () => import("@/views/admin/AdminCatalogueView.vue"),
      },
      {
        path: "orders",
        name: "admin-orders",
        component: () => import("@/views/CatalogueView.vue"),
      },
      {
        path: "/catalogue-modify",
        name: "admin-catalogue-modify",
        component: () => import("@/views/admin/AdminCatalogueModifyView.vue"),
      },
    ],
  },
];
