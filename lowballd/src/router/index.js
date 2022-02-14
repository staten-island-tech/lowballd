import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Feed from "../views/Feed.vue";
import Marketplace from "../views/Marketplace.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Product from "../views/Product.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/feed", name: "Feed", component: Feed },
  { path: "/marketplace", name: "Marketplace", component: Marketplace },
  { path: "/about", name: "About", component: About },
  { path: "/login", name: "Login", component: Login },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/product", name: "Product", component: Product },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
