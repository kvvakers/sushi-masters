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
    path: "/log-out",
    name: "log-out",
    component: () => import("@/views/LogoutView.vue"),
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
