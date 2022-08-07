import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {},
  },
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: path.resolve(process.cwd(), "src") + "/",
      },
    ],
  },
  server: {
    open: true,
  },
});
