export const serviceRoutes = [
  {
    path: "/not-found",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/not-found",
  },
];
