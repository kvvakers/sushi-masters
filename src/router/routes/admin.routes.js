export const adminRoutes = [
  {
    path: "/admin",
    name: "admin",
    meta: { requiresAdmin: true },
    redirect: "/admin/catalogue",
    component: () => import("@/layouts/AdminLayout.vue"),
    children: [
      {
        path: "catalogue",
        name: "admin-catalogue",
        meta: { requiresAdmin: true, layout: "AdminLayout" },
        component: () => import("@/views/admin/AdminCatalogueView.vue"),
      },
      {
        path: "orders",
        name: "admin-orders",
        meta: { requiresAdmin: true, layout: "AdminLayout" },
        component: () => import("@/views/home/CatalogueView.vue"),
      },
      {
        path: "/catalogue-editing/:id",
        name: "catalogue-editing",
        meta: { requiresAdmin: true, layout: "AdminLayout" },
        component: () => import("@/views/admin/EditCatalogueView.vue"),
      },
    ],
  },
];
