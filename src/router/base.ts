import { ErrorPage, RedirectName, Layout } from "@/router/constant";

// 404 on a page
export const ErrorPageRoute = {
  path: "/:path(.*)*",
  name: "ErrorPage",
  component: Layout,
  meta: {
    title: "ErrorPage",
    hideBreadcrumb: true,
  },
  children: [
    {
      path: "/:path(.*)*",
      name: "ErrorPageSon",
      component: ErrorPage,
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
      },
    },
  ],
};

export const RedirectRoute = {
  path: "/redirect",
  name: RedirectName,
  component: Layout,
  meta: {
    title: RedirectName,
    hideBreadcrumb: true,
  },
  children: [
    {
      path: "/redirect/:path(.*)",
      name: RedirectName,
      component: () => import("@/view/redirect/index.vue"),
      meta: {
        title: RedirectName,
        hideBreadcrumb: true,
      },
    },
  ],
};
