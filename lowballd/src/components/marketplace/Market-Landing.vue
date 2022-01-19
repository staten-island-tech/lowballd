<template>
    <section class="my-7 mx-5 flex justify-center w-screen">
        <div class=''>
            <Filter/>
        </div>
        <div class='mx-3 flex flex-row flex-wrap '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
</template>

<script>
import Card from './Card.vue';
import Filter from './Filter.vue';
export default {
    name: 'MarketLanding',
    components: {
        Card, Filter,
    },
}
</script>