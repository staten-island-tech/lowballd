<template>
    <div class="max-h-40 transform translate-y-2 hover:translate-y-0 duration-500 ease-in-out">
        <div :style="backgroundStyles(postImage)" class="shadow-md block w-36 h-36 bg-cover mx-4"></div>
        <!-- <div class="absolute -mt-7 bg-gray-800 text-white px-2 py-1 w-36 mx-4 image-overlay">{{postDate}}</div> -->
        <div class="w-36 -mt-9 absolute text-white text-xs font-bold bg-green-500 inline-flex ml-4 py-2 px-3">
        <div class="w-4 h-4 fill-white mr-2 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/></svg> 
        </div>
        <span class="pt-[2.5px]">
          {{postDate}}
        </span>
      </div>

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