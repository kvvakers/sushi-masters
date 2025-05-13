import { RouteName } from "@/constants/RouteName";

export const adminRoutes = [
  {
    path: "/admin",
    name: RouteName.ADMIN,
    meta: { requiresAdmin: true },
    redirect: "/admin/catalogue",
    component: () => import("@/layouts/AdminLayout.vue"),
    children: [
      {
        path: "catalogue",
        name: RouteName.ADMIN_CATALOGUE,
        meta: { requiresAdmin: true, layout: "AdminLayout" },
        component: () => import("@/views/admin/AdminCatalogueView.vue"),
      },
      {
        path: "orders",
        name: RouteName.ADMIN_ORDERS,
        meta: { requiresAdmin: true, layout: "AdminLayout" },
        component: () => import("@/views/home/catalogue/CatalogueView.vue"),
      },
      {
        path: "/catalogue-editing/:id",
        name: RouteName.ADMIN_EDITING,
        meta: { requiresAdmin: true, layout: "AdminLayout" },
        component: () => import("@/views/admin/EditCatalogueView.vue"),
      },
    ],
  },
];
