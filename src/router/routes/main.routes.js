export const mainRoutes = [
  {
    path: "/",
    redirect: "/main/catalogue",
  },
  {
    path: "/main",
    name: "main",
    redirect: "/main/catalogue",
    component: () => import("@/layouts/LayoutDefault.vue"),
    children: [
      {
        path: "catalogue",
        name: "catalogue",
        component: () => import("@/views/CatalogueView.vue"),
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("@/views/CartView.vue"),
      },
      {
        path: "payment",
        name: "payment",
        component: () => import("@/views/PaymentView.vue"),
      },
    ]
  },
];
