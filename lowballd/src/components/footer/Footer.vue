<template>
    <footer class="p-10 footer bg-base-200 text-base-content footer-center">
  <div class="grid grid-flow-col gap-4 ">
    <router-link to="about" class="hover:underline" >ABOUT</router-link> 
    <router-link to="feed" class="hover:underline">FEED</router-link>
    <router-link to="marketplace" class="hover:underline">MARKET</router-link>
  </div> 
  <div>
    <p>Copyright © 2021 - All right reserved by LOWBALLD</p>
  </div>
</footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>