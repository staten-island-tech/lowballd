<template>
<router-link class="hover:cursor-pointer" :to="'/marketplace/' + prodId">
    <div class="max-h-40 transform translate-y-2 hover:translate-y-0 duration-500 ease-in-out">
        <div :style="backgroundStyles(listingImage)" class="shadow-md block w-36 h-36 bg-cover mx-4"></div>
        <div class="relative pt-4 mx-4">
            <div class="flex flex-row justify-between">
                <div>
                    <p class="text-xs text-gray-500 group-hover:underline group-hover:underline-offset-4">
                        {{category}}
                    </p>
                    <h3 class="text-md group-hover:underline group-hover:underline-offset-4">
                    {{title}}
                    </h3>
                </div>

                <div class="-mt-1">
                    <span class="text-sm">
                        ${{price}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</router-link>
</template>

<script>
    export default {
        name: 'UserListing',
        data() {
            return {
                prodId: null,
            }
        },
        props: {
            productId: null,
            listingImage: String,
            category: null,
            title: null,
            price: null,
        },
        methods: {
            backgroundStyles(listingImage) {
                return {
                    'background-image': `url(${listingImage})`,
                }
            },
        },
        mounted() {
            console.log(this.productId)
            this.prodId = this.productId;
        }
    }
</script>

<style>

</style>