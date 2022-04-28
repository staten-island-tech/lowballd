<template>
    <div v-for="(product, index) in products" :key="index" class="hover:bg-slate-200 cursor-pointer m-1"> 
        <div class="flex flex-col w-60 m-3">
            <div class="card-photo">
                <div class="w-full h-60">
                    <img class="h-full w-auto object-cover" :src="product.img">
                </div>
            </div>
            <h2 class="mt-2 my-1">{{product.title}}</h2>
            <h2>price</h2>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'Card',
    created() {
        console.log(this.$store.state.products)
    },
}

</script>