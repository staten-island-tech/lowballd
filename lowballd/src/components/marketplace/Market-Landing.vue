<template>
    <section class="bg-white my-7 mx-5 sm:mx-0 flex flex-row sm:flex-col justify-center w-full ">
        <Filter />
        <div class='bg-white sm:justify-center w-screen-xl mx-3 flex flex-row flex-wrap '>
            <Card v-for="(product, index) in $store.state.products" :key="index"/>

        </div>
    </section>
</template>

<script>
import Filter from './Filter.vue';
import Card from './Card.vue';

import { mapActions } from 'vuex';

export default {
    name: 'MarketLanding',
    components: { 
        Card,
        Filter,
    },
    created() {
        this.callApi()
        console.log(this.$store.state.products)
    },
    
}

</script>