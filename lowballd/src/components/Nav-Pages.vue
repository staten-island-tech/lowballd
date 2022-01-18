<template>
    <div id="nav-page" class=" mx-3 flex ">
        <a href="#" class="uppercase ">{{page}}</a>
    </div>
</template>

<script>
export default {
    name: "NavPage",
    props: ["page"]
}
</script>