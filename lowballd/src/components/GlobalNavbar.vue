<template>
  <div class="w-full h-20 flex flex-row justify-between px-8 py-4">
    <router-link to="/" class="text-xl my-auto">Lowballd</router-link>
    <div class="my-auto">
      <router-link to="feed" class="px-6">Feed</router-link>
      <router-link to="marketplace" class="px-6">Marketplace</router-link>
    </div>
    <div class="my-auto">
      <Login :logindata="profileData"></Login>
    </div>
  </div>
</template>

<script>
import Login from "../components/login/LoginComponent.vue";

export default {
  name: "GlobalNavbar",
  data() {
    return {
      userdata: this.$auth.user,
      profileData: [],
      token: null,
      newStr: null,
    };
  },
  mounted() {
    this.callApi();
  },
  methods: {
    async callApi() {
      const getUserId = this.userdata.sub.replace("auth0|", "");

      try {
        const token = await this.$auth.getTokenSilently();
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${getUserId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        this.profileData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    Login,
  },
};
</script>
