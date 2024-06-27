/// <reference types="vite/client" />
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx"],
      outDir: "dist/types",
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    sourcemap: true,
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "whs-library",
      formats: ["es", "umd"],
      fileName: (format) => `whs-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
