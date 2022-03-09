<template>
  <div
    class="navbar navbar-transition shadow-sm bg-slate-100 text-slate-800 font-['Work_Sans'] w-screen"
  >
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold font-['Spectral']"> lowballd. </span>
    </div>
    <div class="px-2 mx-2 navbar-center lg:flex">
      <div class="flex items-stretch">
        <router-link to="about">
          <a class="btn btn-ghost btn-sm">ABOUT</a>
        </router-link>
        <router-link to="feed">
          <a class="btn btn-ghost btn-sm">FEED</a>
        </router-link>
        <router-link to="marketplace">
          <a class="btn btn-ghost btn-sm">MARKETPLACE</a>
        </router-link>
      </div>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from "../login/LoginComponent.vue";
export default {
  components: {
    Login,
  },
  name: "FeedNavbar",
};
</script>

<style scoped>
.navbar-transition {
  transition: 0.2s all ease-out;
}
</style>
