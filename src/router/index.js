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
  console.log("beforeEach run");
  if (to.name === "account") {
    Token.remove();
    return next();
  }
  if (from.name === undefined) {
    console.log(1);
    if (!Token.exists()) {
      console.log(1.1);
      return next({ name: "account" });
    }
    console.log(2);
    const userStore = useUserStore();
    userStore
      .fetchUser()
      .then(() => next())
      .catch(() => next({ name: "account" }));
    console.log(3);
  }
  console.log(4);
  next();
});

export default router;
