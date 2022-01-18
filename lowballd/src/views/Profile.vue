<template>
    <Navbar></Navbar>
    <div class="w-1/5 h-96 m-16">
         <div class="card text-center shadow-2xl">
  <div class="avatar mx-auto my-4">
    <div class="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png">
    </div>
    </div> 
    <h1 class="text-2xl">Alston Chan</h1>
  <button class="btn w-4/5 mx-auto my-2 bg-gray-100 text-slate-900">neutral</button>
  <button class="btn w-4/5 mx-auto my-2 bg-gray-100 text-slate-900">neutral</button>
  <button class="btn w-4/5 mx-auto my-2 bg-gray-100 text-slate-900">neutral</button>
  <button class="btn w-4/5 mx-auto my-2 bg-gray-100 text-slate-900">neutral</button>
  <button class="btn w-4/5 mx-auto my-2 bg-gray-100 text-slate-900">neutral</button>
</div> 
    </div>
</template>

<script>
import Navbar from '../components/profile/Navbar.vue'

export default {
    name: 'Profile',
    components: {
        Navbar
    },
}
</script>