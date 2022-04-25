<template>
  <div class="m-0">
    <!-- <button @click="getToken">GET TOKEN</button> -->
    <div v-if="!$auth.loading.value">
      <div v-if="!$auth.isAuthenticated.value">
        <button @click="login()" class="text-md">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="user"
            class="svg-inline--fa fa-user fa-w-14 inline-block w-3 mr-2 mb-1 stroke-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
            ></path>
          </svg>
          Sign In
        </button>
      </div>

      <div v-if="$auth.isAuthenticated.value">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn m-1">
            <div class="avatar my-auto mr-2">
              <div class="rounded-full w-6 h-6">
                <img :src="userdata.picture" />
              </div>
            </div>
            <p class="font-Spartan font-bold text-slate-700">{{ userdata }}</p>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><router-link to="profile">View Profile</router-link></li>
            <li>
              <a
                v-if="$auth.isAuthenticated.value"
                @click="logout()"
                class="font-Spartan text-md"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>Loading</div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      userdata: this.$auth,
      token: null,
    };
  },

  methods: {
    // Log the user in
    async login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    async getToken() {
      const token = await this.$auth.getTokenSilently();
      console.log(token);
    },
  },
};
</script>

<style scoped>
.btn {
  @apply bg-slate-200;
  @apply border-none;
}

.btn:hover {
  @apply bg-slate-400;
}
</style>
