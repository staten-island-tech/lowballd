<template>
<div>
<h1 class="text-center text-3xl mt-20 font-['Spectral'] font-semibold">OUTFIT OF THE DAY</h1>
<h1 class="text-center text-3xl font-['Spectral'] font-semibold">WHAT DID YOU WEAR TODAY?</h1>
<div class="flex items-center justify-center"><button class=" mb-20 mt-6 mr-5 text-xl border-b-2 border-double border-transparent hover:border-current hover:font-bold cursor-pointer select-none">Trending</button><button class="mb-20 mt-6 mr-5 text-xl border-b-2 border-double border-transparent hover:border-current cursor-pointer hover:font-bold select-none">Following</button></div>
</div>
<FeedCard/>



</template>

<script>
    import FeedCard from './FeedCard.vue'
    export default {
        name: 'FeedComponent',
        components: {
          FeedCard,
        },
    }

</script>