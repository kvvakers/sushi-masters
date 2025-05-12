export const accountRoutes = [
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/auth/AccountView.vue"),
  },
  {
    path: "/log-out",
    name: "log-out",
    component: () => import("@/views/auth/LogoutView.vue"),
  },
];
