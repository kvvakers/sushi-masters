import { Token } from "@/utils/Token";
import { useUserStore } from "@/stores/user";

export const beforeEachGuard = async (to, from, next) => {
  const userStore = useUserStore();
  if (to.name === "account") {
    Token.remove();
    userStore.clear();
    return next();
  }
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
}
