export const accountRoutes = [
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
];
