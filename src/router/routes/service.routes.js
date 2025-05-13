import { RouteName } from "@/constants/RouteName";

export const serviceRoutes = [
  {
    path: "/not-found",
    name: RouteName.NOT_FOUND,
    component: () => import("@/views/core/NotFoundView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/not-found",
  },
];
