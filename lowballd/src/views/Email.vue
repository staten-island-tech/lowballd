<template>
<GlobalNavbar/>
<div class="min-h-screen ">
<div class="mt-[5%] flex items-center justify-center">
  <img class="w-1/6 h-1/6 " src="https://www.svgrepo.com/show/209758/email-mail.svg">
</div>
<h1 class="text-center text-4xl mt-[2%]">Thank you for verifying your email</h1>

<router-link to="/" @click="checkLogin" class=" mt-[2%] flex items-center justify-center text-2xl my-auto"
      >Take Me back</router-link
    >
</div>

</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
export default {
    name: 'Email',
    components: {
        GlobalNavbar
    },
} 
</script>

