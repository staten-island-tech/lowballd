<template>
    <div class="max-h-40 transform translate-y-2 hover:translate-y-0 duration-500 ease-in-out"  @mouseover="showRemove = true" @mouseleave="showRemove = false">
    <div v-if="showRemove" class="hover:cursor-pointer absolute left-36 bottom-36 w-8 h-8 rounded-full bg-red-500 flex flex-row justify-center pt-1">
            <svg class="fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
        </div>
    <router-link class="hover:cursor-pointer" :to="'/marketplace/' + prodId">
        <div :style="backgroundStyles(listingImage)" class="shadow-md block w-36 h-36 bg-cover mx-4"></div>
        <div class="relative pt-4 mx-4">
            <div class="flex flex-row justify-between">
                <div>
                    <p class="text-xs text-gray-500 group-hover:underline group-hover:underline-offset-4">
                        {{category}}
                    </p>
                    <h3 class="text-sm w-28 group-hover:underline group-hover:underline-offset-4">
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
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'UserListing',
        data() {
            return {
                prodId: null,
                showRemove: false,
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