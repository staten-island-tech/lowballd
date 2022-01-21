<template>
    <a class="btn-ghost btn-sm hover:bg-gray-400 focus:bg-gray-600 rounded-btn bg-white mx-1 my-1.5 capitalize">
        <h2>{{filterBtn}}</h2>
    </a>
</template>

<script>
export default {
    name: "FilterBtn",
    props: ['filterBtn']

}

</script>