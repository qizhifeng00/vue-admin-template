export const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/view/login/login.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/home",
    name: "personal",
    meta: {
      title: "个人中心",
      hidden: true,
    },
    children: [
      {
        path: "info",
        component: () => import("@/views/home/home.vue"),
        meta: {
          title: "个人中心",
        },
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/exception/404.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/exception/500.vue"),
    meta: {
      hidden: true,
    },
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/exception/403.vue"),
    meta: {
      hidden: true,
    },
  },
];
