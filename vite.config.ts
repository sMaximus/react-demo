import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, "src");
const pageDir = resolve(srcDir, "pages");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@root": rootDir,
      "@src": srcDir,
      "@assets": resolve(srcDir, "assets"),
      "@pages": pageDir,
    },
  },
});
