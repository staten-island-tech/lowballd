<template>
    <a class="hover:bg-gray-400 flex justify-center items-center btn-ghost btn-sm cursor-pointer rounded-btn bg-white my-2 capitalize">
        <h2 >{{filterBtn}}</h2>
    </a>
</template>

<script>
export default {
    name: "FilterBtn",
    props: ['filterBtn']

}

</script>