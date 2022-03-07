import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";
import router from "./router";
import { domain, clientId } from "@/auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
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

Vue.config.productionTip = false;

createApp(App).use(router).mount("#app");
