import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";

import "@/assets/css/reset-mobile.css";
import "vant/lib/index.css";

createApp(App).use(store).use(router).use(Vant).mount("#app");
