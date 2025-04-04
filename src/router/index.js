import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { adminRoutes } from "./admin.routes";
import { serviceRoutes } from "./service.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...adminRoutes, ...serviceRoutes],
});

export default router;
