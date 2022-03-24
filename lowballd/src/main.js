// src/main.js
import "./tailwind.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import the Auth0 configuration

import authConfig from "../auth_config.json";
import { setupAuth } from "./auth";


// import store form './store'
// new Vue({
//   store,
//   // existing Vue settings here...
// }).mount('#app')   // or whatever mount point you have

let app = createApp(App).use(store).use(router);

function callbackRedirect(appState) {
  router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
  app.use(auth).mount("#app");
});
