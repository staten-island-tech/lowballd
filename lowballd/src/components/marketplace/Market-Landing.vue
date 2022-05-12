<template>
    <section class="w-full flex justify-center flex-row sm:flex-col ">
        <Filter />        
        <div v-for="product in $store.state.products" :key="product._id">
            <Card :product="product"/>
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