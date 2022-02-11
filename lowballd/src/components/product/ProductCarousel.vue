<template>
<div class="w-full carousel">
  <div id="item1" class="w-full pt-20 carousel-item">
    <img src="https://picsum.photos/id/500/800/300" class="w-1/3">
  </div> 
  <div id="item2" class="w-full pt-20 carousel-item">
    <img src="https://picsum.photos/id/501/800/300" class="w-1/3">
  </div> 
  <div id="item3" class="w-full pt-20 carousel-item">
    <img src="https://picsum.photos/id/502/800/300" class="w-1/3">
  </div> 
  <div id="item4" class="w-full pt-20 carousel-item">
    <img src="https://picsum.photos/id/503/800/300" class="w-1/3">
  </div>
</div> 
<div class="flex justify-center w-1/3 py-4 space-x-2">
  <a href="/components/carousel#item1" class="btn btn-xs btn-circle">1</a> 
  <a href="/components/carousel#item2" class="btn btn-xs btn-circle">2</a> 
  <a href="/components/carousel#item3" class="btn btn-xs btn-circle">3</a> 
  <a href="/components/carousel#item4" class="btn btn-xs btn-circle">4</a>
</div>
</template>

<script>
    export default {
        name: 'ProductCarousel',
    }
</script>