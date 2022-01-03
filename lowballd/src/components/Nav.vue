<template>
    <div id="nav-page">
        <a href="#">{{page}}</a>
    </div>
</template>

<script>
export default {
    name: "Nav",
    props: ["page"]
}
</script>