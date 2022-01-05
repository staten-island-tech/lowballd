<template>
    <section>
        <div class="flex flex-col w-60 max-h-96 my-[59px] mx-[1rem]">
            <Card-Photo />
            <CardTitlePrice title="Name of Whatever This Is" price="XX.XX"/>
        </div>
    </section>
</template>

<script>
import CardPhoto from '../components/Card-Photo.vue';
import CardTitlePrice from './Card-Title-Price.vue.vue';
export default {
    name: "Card",
    components: { CardPhoto, CardTitlePrice },
    props: [
        "title",
        "price"
    ]

}

</script>