<template>
    <router-link :to="productPath" class="block overflow-hidden group mx-6 sm:my-6">
        <div class="shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-3xl overflow-hidden">
            <img
            class="cover group-hover:scale-105 transition-transform duration-500 object-cover w-60 h-60"
            :src="product.images[0]"
            />
        </div>

        <div class="relative pt-4 mx-2">
            <p class="text-xs text-gray-500 group-hover:underline group-hover:underline-offset-4">
                {{product.category}}
            </p>
            <h3 class="text-md group-hover:underline group-hover:underline-offset-4">
            {{product.title}}
            </h3>

            <p class="mt-1">

            <span class="font-medium tracking-wider">
                ${{product.price}}
            </span>
            </p>
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

}

</script>