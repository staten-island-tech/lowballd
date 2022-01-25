<template>
    <section class=" my-7 mx-5 sm:mx-0 flex flex-row sm:flex-col justify-center w-full ">
        <div class=''>
            <Filter/>
        </div>
        <div class='max-w-screen-xl mx-3 flex flex-row flex-wrap '>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
            <Card title='Name of Item' price='XX'/>
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
    props: [
        "title",
        "price"
    ],
}

</script>