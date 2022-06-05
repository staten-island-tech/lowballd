<template>
<GlobalNavbar/>
<div>
<div class=" flex items-center justify-center">
  <img class="w-1/6 h-1/6 mt-[5%]" src="https://www.svgrepo.com/show/209758/email-mail.svg">
</div>
<h1 class="text-center text-4xl mt-[2%]">Thank you for verifying your email</h1>
<h1 class="text-center text-4xl mb-[5%]"><a class="hover:text-indigo-700 hover:cursor-pointer underline" href="/">Take me back</a></h1>  
</div>
<Footer />
</template>

<script>
import Footer from "../components/footer/Footer.vue";
import GlobalNavbar from "../components/GlobalNavbar.vue";
export default {
    name: 'Email',
    components: {
        GlobalNavbar,
        Footer,
    },
} 
</script>

