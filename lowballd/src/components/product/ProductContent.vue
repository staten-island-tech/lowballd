<template>
<div class="pt-12 flex flex-row w-full">
  <div class="flex-grow w-12 card bg-base-300 rounded-box place-items-left ml-6"><ProductCarousel></ProductCarousel></div> 
  <div class="divider divider-vertical"></div> 
  <div class="card rounded-box mr-6 items-center"><ProductAccount></ProductAccount></div>
</div>

</template>

<script>
import ProductCarousel from './ProductCarousel.vue'
import ProductAccount from './ProductAccount.vue'

    export default {
        name: 'ProductContent',
        components: {
            ProductAccount, ProductCarousel,
        },
    }
</script>