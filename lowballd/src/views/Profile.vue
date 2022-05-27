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
    <div>
      <div class="flex flex-col items-center justify-center p-3 min-h-full">
        
        <button
          @click="onToggle"
          class="bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
        >
          Open
        </button>
      </div>
            <transition name="fade">
        <div v-if="isModalVisible">
          <div
            @click="onToggle"
            class="absolute bg-black opacity-70 inset-0 z-0"
          ></div>
          <div
            class="w-full max-w-lg p-3 absolute mx-auto my-auto rounded-xl shadow-lg bg-white z-100"
          >
            <div>
              <div class="text-center p-3 flex-auto justify-center leading-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-16 h-16 flex items-center text-purple-500 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h2 class="text-2xl font-bold py-4">Are you sure?</h2>
                <p class="text-md text-gray-500 px-8">
                  Do you really want to exit without saving your work?
                </p>
              </div>
              <div class="p-3 mt-2 text-center space-x-4 md:block">
                <button
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                >
                  Save
                </button>
                <button
                  @click="onToggle"
                  class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition> 
      </div>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue";
import ProfileContent from "../components/profile/ProfileContent.vue";

export default {
  data() {
    return {
      authenticationStatus: this.$auth.isAuthenticated,
      isOpen: false,
    };
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },

  name: "Profile",
  components: {
    GlobalNavbar,
    ProfileCard,
    ProfileContent,
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