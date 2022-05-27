<template>
    <GlobalNavbar></GlobalNavbar>
    <div v-if="authenticationStatus" class="authenticated">
      <div
        class="w-full flex flex-row justify-around sm:flex sm:flex-col sm:justify-center"
      >
        <ProfileCard></ProfileCard>
        <ProfileContent></ProfileContent>
      </div>
    </div>
    <h1 v-else>
      Oh no, looks like you aren't signed in 😢, please return to the home page
      to sign in
    </h1>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue";
import ProfileContent from "../components/profile/ProfileContent.vue";

export default {
  name: "Profile",
  components: {
    GlobalNavbar,
    ProfileCard,
    ProfileContent,
  },
  data() {
    return {
      authenticationStatus: this.$auth.isAuthenticated,
    };
  },
};
</script>
