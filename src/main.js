import { createApp } from "vue";
import { createPinia } from "pinia";
import "./axios";
import "./style.css";
import App from "./App.vue";
const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
