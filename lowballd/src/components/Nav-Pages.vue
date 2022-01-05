<template>
    <div id="nav-page" class=" mx-3 flex justify-end">
        <a href="#" class="uppercase ">{{page}}</a>
    </div>
</template>

<script>
export default {
    name: "NavPage",
    props: ["page"]
}
</script>