import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import "./style/index.scss";
import "element-plus/theme-chalk/dark/css-vars.css";
import element from "./plugins/element";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "@/router/index";
import { debounce } from "./utils/debounce";
import "normalize.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);

// 给pinia添加插件
pinia.use(({ store, options }) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce(
      (debounceActions, action) => {
        if (options.debounce) {
          debounceActions[action] = debounce(
            store[action],
            options.debounce[action] as number,
          );
        }

        return debounceActions;
      },
      {} as { [key: string]: any },
    );
  }
});

app.use(router);
app.use(element);
app.mount("#app");
