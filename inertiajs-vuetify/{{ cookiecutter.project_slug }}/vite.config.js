import { resolve, dirname } from "node:path";
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      vuetify({ autoImport: true }),
    ],
    root: resolve("./frontend"),
    base: "/static/app/",
    server: {
      host: "localhost",
      port: 3000,
      open: false,
      watch: {
        usePolling: true,
        disableGlobbing: false,
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./frontend", import.meta.url)),
      },
      extensions: [".js", ".vue"],
    },
    build: {
      outDir: resolve("./frontend/dist"),
      assetsDir: "assets",
      manifest: "manifest.json",
      emptyOutDir: true,
      target: "es2015",
      rollupOptions: {
        input: {
          main: resolve("./frontend/src/main.js"),
        },
        output: {
          chunkFileNames: undefined,
        },
      },
    },
    optimizeDeps: {
      include: [],
      exclude: [],
    },
  };
});
