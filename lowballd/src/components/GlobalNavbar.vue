<template>
<div class="w-full h-20 flex flex-row justify-between px-8 py-4">
      <router-link to="/" class="text-xl my-auto">Lowballd</router-link>
      <div class="my-auto">
        <router-link to="feed" class="px-6">Feed</router-link>
        <router-link to="marketplace" class="px-6">Marketplace</router-link>
        <router-link to="contact" class="px-6">Contact</router-link>
      </div>
      <div class="my-auto">
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