<template>
    <div class="capitalize w-full cursor-pointer">
        <h1>{{filterCategory}}</h1>
    </div>
</template>

<script>
export default {
    name: "FilterCategory",
    props: ['filterCategory'],
    data() {
            return {
                profile_data: [],
            }
        },
        async created() {
        try {
        const res = await axios.get(`http://localhost:3001/products`);
            this.profile_data = res.data[0];
            
        } catch (error) {
            console.log(error);
        }
    },
}
</script>