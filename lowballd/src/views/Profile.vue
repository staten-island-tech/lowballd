<template>
    <GlobalNavbar></GlobalNavbar>
    <div v-if="authenticationStatus" class="authenticated">
      <transition name="fade">
      <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div @click="showModal = false" class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
          ></span
          >&#8203;
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
        </div>
        </div>
      </div>
    </transition>
      <div
        class="w-full flex flex-row justify-around sm:flex sm:flex-col sm:justify-center"
      >
        <ProfileCard @set-shown-value="changeShownValue"></ProfileCard>
        <ProfileContent :shown="this.shownValue" ref="profilecontent"></ProfileContent>
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
import UploadImages from "../components/postfeed/vue-upload-drop-images.vue";

export default {
  name: "Profile",
  components: {
    GlobalNavbar,
    ProfileCard,
    ProfileContent,
    UploadImages,
  },
  data() {
    return {
      authenticationStatus: this.$auth.isAuthenticated,
      shownValue: 1,
    };
  },
  methods: {
    changeShownValue(value) {
      this.shownValue = value;
      console.log(this.shownValue)
    },
    },
};
</script>
<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>