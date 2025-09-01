import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },

  plugins: [
    vue(),
    UnoCss(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
      eslintrc: { enabled: false }, // 给eslint生产的配置,只需要一次
    }),
    Components({
      // 解析组件
      resolvers: [ElementPlusResolver()],
      dirs: ["src/components", "src/layout/components"], // 目录下的组件可以自动加载
    }),
    ElementPlus({}),
  ],
});
