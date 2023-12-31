import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components/pages",
      common: "/src/components/common",
      pages: "/src/pages",
      store: "/src/store",
      styles: "/src/styles",
      routes: "/src/routes",
      api: "/src/api",
      utils: "/src/utils",
      models: "/src/models",
      assets: "/src/assets",
    },
  },
});
