// src/main.js
import "./tailwind.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "flowbite";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import authConfig from "../auth_config.json";
import { setupAuth } from "./auth";

let app = createApp(App).use(store).use(router);
app.use(VueSweetalert2);

function callbackRedirect(appState) {
  router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth).mount("#app");
});

app.use(store);
