import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";
import { RedirectRoute } from "@/router/base";

//根路由
export const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "Root",
  component: () => import("@/view/layout/index.vue"),
  meta: {
    title: "Root",
  },
};

//登录
export const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/view/login/index.vue"),
  meta: {
    title: "登录",
  },
};

//普通路由 无需验证权限
export const routes: any[] = [LoginRoute, RootRoute];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
