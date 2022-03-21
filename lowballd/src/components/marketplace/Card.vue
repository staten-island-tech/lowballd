<template>
    <router-link to="product" v-on:click="update()" class="hover:bg-slate-200 cursor-pointer m-1">
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
// change a tag to router-link and paste:  to="product"
export default {
    name: "Card",
    props: {
        name: String,
        price: String,
        imageUrl: String,
    },
    data () {
        return {
            Main: {
                title: '',
                price: '',
                imgUrl: '',
            }
        }
    },
    methods: {
        update() {
            this.Main.title = this.name
            this.Main.price = this.price
            this.Main.imgUrl = this.imageUrl
            console.log(this.Main)
        }
    }
}


</script>