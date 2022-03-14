<template>
    <a class="hover:bg-slate-200 cursor-pointer m-1">
        <div class="flex flex-col w-60 max-h-96 m-3">
            <div class="card-photo">
                <div class="w-full h-[21rem]">
                    <img class="w-full h-[21rem]" :src="imageUrl">
                </div>
            </div>
            <h2 class="my-1">{{name}}</h2>
            <h2>${{price}}</h2>
        </div>
    </a>
</template>

<script>
export default {
    name: "Card",
    props: {
        name: String,
        price: String,
        imageUrl: String,
    },
    
}
</script>