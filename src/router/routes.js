export const routes = [
  {
    path: "/",
    redirect: "/catalogue",
  },
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/AccountView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
  },
  {
    path: "/catalogue",
    name: "catalogue",
    component: () => import("@/views/CatalogueView.vue"),
  },
];
