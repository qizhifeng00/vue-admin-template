import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes/constants";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
