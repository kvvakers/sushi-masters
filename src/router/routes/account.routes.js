import { RouteName } from "@/constants/RouteName";

export const accountRoutes = [
  {
    path: "/account",
    name: RouteName.ACCOUNT,
    component: () => import("@/views/auth/AccountView.vue"),
  },
  {
    path: "/log-out",
    name: RouteName.LOGOUT,
    component: () => import("@/views/auth/LogoutView.vue"),
  },
];
