<template>
<div class="flex justify-between flex-wrap">
<a class="relative block border bg-slate-200 ml-[10rem] w-1/6">
  <button
    class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
    type="button"
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
    </svg>
  </button>

  <img 
    src="https://lastfm.freetls.fastly.net/i/u/770x0/0e62a68e63a22d617d4d0756cca6695c.jpg"
    class="object-contain w-full h-30 lg:h-72 mt-[4rem]"
    alt="@KESHI"
    loading="lazy"
  />

  <div class="p-6">
    <h1>@KESHI</h1>
    

    

    
  </div>
</a>
</div>
</template>

<script>
 
    export default {
        name: 'FeedCard',
    }

</script>