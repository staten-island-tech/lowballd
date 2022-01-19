<template>
    <section>
        <div class="flex flex-col w-60 max-h-96 m-4">
            <Card-Photo />
            <CardTitlePrice title="Name of Item" price='XX.XX' />
        </div>
    </section>
</template>

<script>
import CardPhoto from './Card-Photo.vue';
import CardTitlePrice from './Card-Title-Price.vue.vue';
export default {
    name: "Card",
    components: { CardPhoto, CardTitlePrice},
    props: [
        "title",
        "price"
    ],
}

</script>