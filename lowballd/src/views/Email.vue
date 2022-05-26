<template>
<GlobalNavbar/>
<div class="min-h-screen ">
<h1 class="text-center text-4xl mt-[20%]">Thank you for verifying your email</h1>

<a href="http://localhost:3000/">
<button class="ml-[46.5%] mr-[46.5 %] mt-[2%] bg-slate-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded">

  Take Me Back 
</button>
</a>
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