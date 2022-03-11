<template>
    <section class="bg-white my-7 mx-5 sm:mx-0 flex flex-row sm:flex-col justify-center w-full ">
        <div class=''>
            <Filter/>
        </div>
        <div class='bg-white sm:justify-center max-w-screen-xl mx-3 flex flex-row flex-wrap '>
            <Card title="" price='XX'/>
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
    data () {
        return {
            profile_data: [],
        }
    },
    async created() {
        try {
        const res = await axios.get(`http://localhost:3001/products`);
            this.profile_data = res.data[0];
            console.log(res.data[0])
        } catch (error) {
            console.log(error);
        }
    },
}

</script>