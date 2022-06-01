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
      <h1 class="text-2xl">{{ profileData.username }}</h1>
      <h1 class="text-base md:text-sm">{{ profileData.email }}</h1>
      <div class="flex flex-row justify-center mt-2">
        <p class="text-sm text-slate-700 pr-2">
          <span class="font-bold">{{ followers }}</span>
          Followers
        </p>
        <p class="text-sm text-slate-700">
          <span class="font-bold">{{ following }}</span>
          Following
        </p>
      </div>
      <div class="py-6">
        <button
          @click="this.$emit('set-shown-value', 1)"
          class="btn btn-sm w-4/5 mx-auto mb-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Feed Posts
        </button>
        <button
          @click="this.$emit('set-shown-value', 2)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Listings
        </button>
        <button
          @click="this.$emit('set-shown-value', 3)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Manage Account
        </button>
        <button
         @click="this.$emit('set-shown-value', 4)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Your Purchases
        </button>
        <button
          @click="this.$emit('set-shown-value', 5)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Notification Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  emits: ['set-shown-value'],
  data() {
    return {
      userdata: this.$auth.user,
      authenticationStatus: this.$auth.isAuthenticated,
      profileData: [],
      followers: [],
      following: [],
    };
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
        this.followers = data.followers.length;
        this.following = data.following.length;
      } catch (error) {
        console.log(error);
      }
    },
    setShownValue(value) {
      this.$emit("setshownvalue", value);
    },
  },
  created() {
    this.callApi();
  },
  computed: {
    // a computed getter

    totalFollowersInteger: function () {
      return this.profileData.length;
    },
  },
};
</script>
