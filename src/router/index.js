import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { beforeEachGuard } from "./guards/beforeEach.guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(beforeEachGuard);

export default router;
