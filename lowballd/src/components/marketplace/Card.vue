<template>
    <section>
        <div class="flex flex-col w-60 max-h-96 m-4">
            <Card-Photo />
            <h2 class="my-1">{{title}}</h2>
            <h2>${{price}}</h2>
        </div>
    </section>
</template>

<script>
import CardPhoto from './Card-Photo.vue';
export default {
    name: "Card",
    components: { CardPhoto},
    props: [
        "title",
        "price"
    ],
}

</script>