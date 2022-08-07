import { createApp } from "vue";
import App from "./App.vue";
import pinia from "./store";
import router from "./router";
import naive from "naive-ui";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(naive);
app.mount("#app");
