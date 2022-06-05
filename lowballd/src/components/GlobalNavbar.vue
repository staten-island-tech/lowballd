<template>
  <div class="w-full h-20 flex flex-row justify-between px-8 py-4">
    <router-link to="/" class="text-xl my-auto">Lowballd</router-link>
    <div class="my-auto">
      <router-link to="feed" @click="checkLogin" class="px-6">Feed</router-link>
      
      <router-link to="marketplace" @click="checkLogin" class="px-6"
        >Marketplace</router-link
      >
      <router-link to="contact" class="px-6">Contact</router-link>
      <router-link to="Faq" class="px-6">FAQ</router-link>
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
      userId: null,
      newStr: null,
    };
  },
  mounted() {
    this.callApi();
  },
  methods: {
    async callApi() {
      if (this.userdata == null) {
        return;
      } else {
        const getUserId = this.userdata.sub.replace("auth0|", "");
        this.userId = getUserId;
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
      }
    },
    async checkLogin() {
      if (this.userdata == null) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Looks like you aren't logged in! Make sure you login to be able to fully use the site.",
        });
        return;
      }
    },
  },
  components: {
    Login,
  },
};
</script>
