import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import unocss from "@unocss/eslint-config/flat";
// import autoImport from "./.eslintrc-auto-import.json";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const autoImport = require("./.eslintrc-auto-import.json");
export default defineConfig([
  unocss,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...autoImport.globals },
    },
  },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"], // 校验vue中的ts代码
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    ignores: [".css", "*.d.ts"],
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-namespace": "off",
    },
  },
  prettierRecommended,
]);
