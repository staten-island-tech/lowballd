<template>
    <router-link  class="hover:bg-slate-200 cursor-pointer m-1">
        <div class="flex flex-col w-60 m-3">
            <div class="card-photo">
                <div class="w-full h-60">
                    <img class="h-full w-auto object-cover" :src="imageUrl">
                </div>
            </div>
            <h2 class="mt-2 my-1">{{name}}</h2>
            <h2>${{price}}</h2>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "Card",
}


</script>