// src/main.js
import "./tailwind.css";
import { createApp } from "vue";
let app = createApp;
import App from "./App.vue";
import router from "./router";

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
app.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

createApp.config.productionTip = false;
createApp(App).use(router).mount("#app");
