import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const repositoryName = "Profolio";

export default defineConfig({
  plugins: [react()],
  base: `/${repositoryName}/`,
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
});
