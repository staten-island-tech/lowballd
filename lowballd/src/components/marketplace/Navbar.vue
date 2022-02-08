<template>
<div :class="{ 'navbar-hide': showNavbar }" class=" navbar navbar-transition shadow-sm bg-slate-100 text-slate-800 font-['Work_Sans'] w-screen z-10 flex justify-between">
  <div class="px-2 mx-2 justify-start">
    <span class="text-lg font-bold font-['Spectral']">
        lowballd.
    </span>
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
        <div class="flex-none px-2 mx-2 lg:flex">
    <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn">
        
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" class="svg-inline--fa fa-user fa-w-14 inline-block w-3 mr-2 stroke-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z">
          </path>
        </svg>
            LOG IN / SIGN UP
      </a> 
    </div>
  </div> 
    </div>
</div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>