<template>
    <div class="max-h-40 transform translate-y-2 hover:translate-y-0 duration-500 ease-in-out">
        <div :style="backgroundStyles(postImage)" class="shadow-md block w-36 h-36 bg-cover mx-4"></div>
        <div class="absolute -mt-7 bg-gray-800 text-white px-2 py-1 w-36 mx-4 image-overlay">{{postDate}}</div>
    </div>
</template>

<script>
    export default {
        name: 'UserPost',
        props: {
            postImage: String,
            postDate: String,
        },
        methods: {
            backgroundStyles(postImage) {
                return {
                    'background-image': `url(${postImage})`,
                }
            },
        },
    }
</script>

<style>

</style>