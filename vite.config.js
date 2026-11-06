import { defineConfig } from "vite";

// Konfigurasi Vite untuk melayani client dan mengizinkan akses folder /shared
export default defineConfig({
  root: ".",
  // GitHub Pages serves project sites below /<repository-name>/.
  // Keep the root default for local development and other hosts.
  base: process.env.VITE_BASE_PATH || "/",
  server: {
    host: "0.0.0.0",
    port: 5178,
    open: true,
    proxy: {
      "/socket.io": {
        target: "http://localhost:3000",
        ws: true,
      },
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
