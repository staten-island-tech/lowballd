<template>
    <section class="sm:w-full w-100 flex justify-center flex-row flex-wrap ">
        <Filter />        
        <div v-for="product in $store.state.products" :id="product.id">
            <Card :product="product" />
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import { useStore } from 'vuex';

import Filter from './Filter.vue';
import Card from './Card.vue';

export default {
    name: 'MarketLanding',
    components: { 
        Card,
        Filter,
    },    
    created() {
        this.callApi()
    },
    methods: {
       ...mapActions(['callApi']), 
    }
}

</script>