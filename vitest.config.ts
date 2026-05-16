import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // ブラウザ環境をエミュレート
    globals: true, // describe / it / expect をimportなしで使う
    setupFiles: "./vitest.setup.ts", // テスト前に毎回実行するセットアップ
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."), // @/types/... などのパスを解決
    },
  },
});
