import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { adminRoutes } from "./admin.routes";
import { serviceRoutes } from "./service.routes";
import { Token } from "@/utils/Token";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...adminRoutes, ...serviceRoutes],
});

router.beforeEach(async (to, from, next) => {
  if (to.name === "account") {
    Token.remove();
    return next();
  }
  const userStore = useUserStore();
  if (from.name === undefined) {
    if (!Token.exists()) {
      return next({ name: "account" });
    }

    try {
      await userStore.fetchUser();
      console.log(userStore.user);
    } catch {
      return next({ name: "account" });
    }
  }
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (userStore.user === undefined || userStore.userRole !== "ROLE_ADMIN") {
      return next({ name: "catalogue" });
    }
  }
  next();
});

export default router;
