<template>
  <div
    :class="{ 'navbar-hide': showNavbar }"
    class="fixed navbar navbar-transition shadow-sm bg-slate-100 text-slate-800 font-['Work_Sans'] w-screen z-10 flex justify-between"
  >
    <div class="px-2 mx-2 justify-start">
      <span class="text-lg font-bold font-['Spectral']"> lowballd. </span>
    </div>
    <div class="sm:hidden px-2 mx-2 navbar-center flex justify-center h-auto">
      <div class="flex items-stretch justify-center">
        <router-link to="about">
          <a class="btn btn-ghost btn-sm">ABOUT</a>
        </router-link>
        <router-link to="feed">
          <a class="btn btn-ghost btn-sm">FEED</a>
        </router-link>
        <router-link to="marketplace">
          <a class="btn btn-ghost btn-sm">MARKETPLACE</a>
        </router-link>
      </div>
    </div>

    <div class="justify-end">
      <div class="flex flex-row px-2 mx-2 items-center">
        <div class="dropdown hidden sm:block">
          <div tabindex="0" class="m-1">
            <button class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            tabindex="0"
            class="p-2 menu dropdown-content bg-base-100 rounded-box w-52"
          >
            <li><router-link to="about">ABOUT</router-link></li>
            <li><router-link to="feed">FEED</router-link></li>
            <li><router-link to="marketplace">MARKETPLACE</router-link></li>
          </ul>
        </div>
        <Login></Login>
        <!-- this is where login component should be -->
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../login/LoginComponent.vue";
export default {
  components: {
    Login,
  },
  name: "Navbar",
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 700) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style scoped>
.navbar-transition {
  transition: 0.2s all ease-out;
}
.navbar-hide {
  box-shadow: none;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
</style>
