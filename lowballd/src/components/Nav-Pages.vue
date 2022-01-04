<template>
    <div id="nav-page" class="bg-slate-300 mx-3">
        <a href="#" class="uppercase ">{{page}}</a>
    </div>
</template>

<script>
export default {
    name: "NavPage",
    props: ["page"]
}
</script>