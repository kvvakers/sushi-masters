export const adminRoutes = [
  {
    path: "/admin",
    name: "admin",
    meta: { requiresAdmin: true },
    component: () => import("@/views/admin/AdminHomeView.vue"),
    redirect: "/admin/catalogue",
    children: [
      {
        path: "catalogue",
        name: "admin-catalogue",
        meta: { requiresAdmin: true },
        component: () => import("@/views/admin/AdminCatalogueView.vue"),
      },
      {
        path: "orders",
        name: "admin-orders",
        meta: { requiresAdmin: true },
        component: () => import("@/views/CatalogueView.vue"),
      },
      {
        path: "/catalogue-editing/:id",
        name: "catalogue-editing",
        meta: { requiresAdmin: true },
        component: () => import("@/views/admin/EditCatalogueView.vue"),
      },
    ],
  },
];
