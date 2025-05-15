import { RouteName } from "@/constants/RouteName";

export const mainRoutes = [
  {
    path: "/",
    redirect: "/main/catalogue",
  },
  {
    path: "/main",
    name: RouteName.MAIN,
    redirect: "/main/catalogue",
    component: () => import("@/layouts/LayoutDefault.vue"),
    children: [
      {
        path: "catalogue",
        name: RouteName.CATALOGUE,
        component: () => import("@/views/home/catalogue/CatalogueView.vue"),
      },
      {
        path: "cart",
        name: RouteName.CART,
        component: () => import("@/views/home/cart/CartView.vue"),
      },
      {
        path: "orders",
        name: RouteName.ORDERS,
        component: () => import("@/views/home/orders/OrdersView.vue"),
      },
      {
        path: "order",
        name: RouteName.ORDER,
        component: () => import("@/views/home/orders/order/OrderView.vue"),
      },
    ]
  },
];
