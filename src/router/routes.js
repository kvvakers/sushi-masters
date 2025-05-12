import { mainRoutes } from "./routes/main.routes";
import { adminRoutes } from "./routes/admin.routes";
import { serviceRoutes } from "./routes/service.routes";
import { accountRoutes } from "./routes/account.routes";

export const routes = [
    ...mainRoutes,
    ...adminRoutes,
    ...serviceRoutes,
    ...accountRoutes
  ];
