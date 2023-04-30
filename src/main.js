import { createApp } from "vue";
import App from "./App.vue";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/base.css";

const app = createApp(App);

app.config.unwrapInjectedRef = true;

app.mount("#app");
