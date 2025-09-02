import {
  defineConfig,
  presetMini,
  presetAttributify,
  presetWind3,
} from "unocss";
// presetMini, presetAttributify等着几个预设包含在unocss包中可以直接导入
// import presetUno from "@unocss/preset-uno";
// import presetAttributify from "@unocss/preset-attributify";
// 新版本中presetUno不再使用 需要使用presetMini
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [presetMini(), presetWind3(), presetAttributify()],
  transformers: [
    transformerDirectives({
      applyVariable: ["--at-apply", "--uno-apply", "--uno"],
    }),
  ],
  shortcuts: {
    btn: "flex bg-black text-red",
  },
});
