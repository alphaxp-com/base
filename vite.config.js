import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [reactRefresh()],
  test: {
    environment: "happy-dom", // or 'jsdom', 'node'
    globals: true,
  },
});
