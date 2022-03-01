<template>
  <Navbar></Navbar>
  <Login></Login>
  <Landing></Landing>
  <About></About>

  <Market></Market>
</template>

<script>
import Landing from "../components/home/Landing.vue";
import About from "../components/home/About.vue";
import Market from "../components/home/Market.vue";
import Navbar from "../components/home/Navbar.vue";
import Login from "../components/login/LoginComponent.vue";

export default {
  name: "Home",
  components: {
    Landing,
    About,
    Market,
    Navbar,
    Login,
  },
};
</script>
