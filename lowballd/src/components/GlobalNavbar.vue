<template>
<div class="w-full h-14 flex flex-row justify-between px-8 pt-4">
      <router-link to="/" class="text-xl">Lowballd</router-link>
      <div>
        <router-link to="feed" class="px-6">Feed</router-link>
        <router-link to="marketplace" class="px-6">Marketplace</router-link>
      </div>
      <div>
        <Login></Login>
      </div>
    </div>
</template>

<script>
import Login from "../components/login/LoginComponent.vue";

export default {
  name: "GlobalNavbar",
  components: {
    Login,
  },
};
</script>