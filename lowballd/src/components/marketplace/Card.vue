<template>
    <router-link :to="productPath" @click='getSingleProduct()'> 
        <div class="hover:bg-slate-200 cursor-pointer m-1 p-0.5">
            <div class="flex flex-col w-60 m-3">
                <div class="card-photo">
                    <div class="w-full max-h-60">
                        <img class="h-full w-auto object-cover" :src="product">
                    </div>
                </div>
                <h2 class="mt-2 my-1">{{product.title}}</h2>
                <h2></h2>
            </div>
        </div>
    </router-link>

</template>

<script>
import { mapMutations } from 'vuex';
import { useStore } from 'vuex';
export default {
    name: 'Card',
    props: ["product", "id"],
    data() {
        return {
            clicked: false,
            singleProd:{}
        }
    },
    computed: {
        productPath () {
            return '/product/${this.id}}'
        },
    },
    methods: {
        ...mapMutations(['loadSingleProd']),
        getSingleProduct (prod) {
            this.singleProd = this.product,
            console.log(this.singleProd),
            store.commit('loadSingleProduct')
        },
    }
}

</script>