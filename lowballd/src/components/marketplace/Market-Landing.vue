<template>
    <section class="bg-white my-7 mx-5 sm:mx-0 flex flex-row sm:flex-col justify-center w-full ">
        <div class=''>
            <Filter />
        </div>
        <div class='bg-white sm:justify-center max-w-screen-xl mx-3 flex flex-row flex-wrap '>
            <Card v-for="product in products" 
                :product="product"
                :name="product.product_title"
                :price="product.product_price"
                :imageUrl="product.product_img"
            />
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Card from './Card.vue';
import Filter from './Filter.vue';
import axios from 'axios';

export default {
    name: 'MarketLanding',
    components: {
        Card, Filter,
    },
    computed: mapState({
        products: state => state.products
    }),

    
}

</script>