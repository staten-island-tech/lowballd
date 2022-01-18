<template>
    <section class="card-title-price my-1 ">
        <h2 class="my-1">{{title}}</h2>
        <h2>${{price}}</h2>
        
    </section>
</template>

<script>
export default {
    name: "CardTitlePrice",
    props: [
        "title",
        "price"
    ]
}
</script>