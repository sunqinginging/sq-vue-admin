import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import "./style/index.scss";
import "element-plus/theme-chalk/dark/css-vars.css";
import element from "./plugins/element";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "@/router/index";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(element);
app.mount("#app");
