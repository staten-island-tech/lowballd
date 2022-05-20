<template>
    <router-link :to="productPath"> 
        <div class="hover:bg-slate-200 cursor-pointer m-1 p-0.5">
            <div class="flex flex-col w-60 m-3">
                <div class="card-photo">
                    <div class="w-full max-h-60">
                        <img class="h-full w-auto object-cover" :src="product.images[0]">
                    </div>
                </div>
                <h2 class="mt-2 my-1">{{product.title}}</h2>
                <h2></h2>
            </div>
        </div>
    </router-link>

</template>

<script>
// import { mapActions } from 'vuex';
// import { useStore } from 'vuex';

export default {
    name: 'Card',
    props: ["product"],
    computed: {
        productPath () {
            return `/marketplace/${this.product._id}`
        },
    },
    mounted(){
        // (${this.$router.params.id}) - figure out if it's router or routes
        //returns undefined 
        console.log(this.$router.params)
    }

}

</script>