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
        path: "payment",
        name: RouteName.PAYMENT,
        component: () => import("@/views/home/payment/PaymentView.vue"),
      },
    ]
  },
];
