import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, "src");
const pageDir = resolve(srcDir, "pages");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: "prefix",
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@root": rootDir,
      "@src": srcDir,
      "@pages": pageDir,
      "@assets": resolve(srcDir, "assets"),
      "@components": resolve(srcDir, "components"),
    },
  },
});
