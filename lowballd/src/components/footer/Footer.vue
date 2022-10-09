<template>
    <footer class="p-10 footer bg-base-200 text-base-content footer-center">
  <div class="grid grid-flow-col gap-4 ">
    <router-link to="feed" class="hover:underline">FEED</router-link>
    <router-link to="marketplace" class="hover:underline">MARKETPLACE</router-link>
     <router-link to="contact" class="hover:underline" >CONTACT</router-link> 
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