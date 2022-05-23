<template>
  <div class="w-1/5 md:w-3/12 my-16 sm:w-5/6 sm:mx-auto sm:mt-12 sm:mb-6">
    <div class="card text-center shadow-lg bg-slate-200">
      <div class="my-2"></div>
      <div class="avatar mx-auto my-4">
        <div
          class="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img :src="profileData.profile_picture" />
        </div>
      </div>
      <div id="app">
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
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
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
      <h1 class="text-2xl">{{ profileData.username }}</h1>
      <h1 class="text-base md:text-sm">{{ profileData.email }}</h1>
      <div class="flex flex-row justify-center mt-2">
        <p class="text-sm text-slate-700 pr-2">
          <span class="font-bold">{{ totalFollowers }}</span>
          Followers
        </p>
        <p class="text-sm text-slate-700">
          <span class="font-bold">{{ totalFollowing }}</span>
          Following
        </p>
      </div>
      <div class="py-6">
        <button
          class="btn btn-sm w-4/5 mx-auto mb-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Posts
        </button>
        <button
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Manage Account
        </button>
        <button
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Your Purchases
        </button>
        <button
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Watchlist
        </button>
        <button
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Bid Offers
        </button>
        <button
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      userdata: this.$auth.user,
      authenticationStatus: this.$auth.isAuthenticated,
      profileData: [],
      totalFollowers: [],
      totalFollowing: [],
      isOpen: false,
    };
  },

  methods: {
    async callApi() {
      const getUserId = this.userdata.sub.replace("auth0|", "");

      try {
        const token = await this.$auth.getTokenSilently();
        const response = await fetch(
          `http://localhost:3001/api/user/${getUserId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        this.profileData = data;
        this.totalFollowers = data.totalFollowers.length;
        this.totalFollowing = data.totalFollowing.length;
      } catch (error) {
        console.log(error);
      }
    },
    onToggle() {
      this.isOpen = !this.isOpen;
    }
  },
  created() {
    this.callApi();
  },
  computed: {
    // a computed getter

    totalFollowersInteger: function () {
      return this.profileData.length;
    },
    isModalVisible() {
      return this.isOpen;
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
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