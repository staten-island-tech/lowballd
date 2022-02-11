<template>
    <div class="capitalize w-full cursor-pointer">
        <h1>{{filterCategory}}</h1>
    </div>
</template>

<script>
export default {
    name: "FilterCategory",
    props: ['filterCategory']
}
</script>