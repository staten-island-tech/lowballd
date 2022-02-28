<template>
  <div
    :class="{ 'navbar-hide': showNavbar }"
    class="navbar navbar-transition shadow-sm bg-slate-100 text-slate-800 font-['Work_Sans'] fixed w-screen z-10"
  >
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold font-['Spectral']"> lowballd. </span>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
      <div class="flex items-stretch">
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
    <div class="navbar-end">
      <div class="flex-none hidden px-2 mx-2 lg:flex">
        <div class="flex items-stretch">
          
        </div>
      </div>

      <div class="flex-none px-2 mx-2 lg:flex">
        <div class="flex items-stretch"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
