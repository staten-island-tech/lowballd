import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Feed from "../views/Feed.vue";
import Marketplace from "../views/Marketplace.vue";
// import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Product from "../views/Product.vue";
import Chat from "../views/Chat.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/feed", name: "Feed", component: Feed },
  { path: "/marketplace", name: "Marketplace", component: Marketplace },
  // { path: "/login", name: "Login", component: Login },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/product", name: "Product", component: Product },
  { path: "/chat", name: "Chat", component: Chat },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
