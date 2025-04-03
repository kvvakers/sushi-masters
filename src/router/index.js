import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: "/not-found",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/not-found",
    },
  ],
});

export default router;
