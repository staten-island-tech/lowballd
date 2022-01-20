<template>
    <div class="w-3/5 h-auto bg-slate-200 my-16">
        <ProfilePosts></ProfilePosts>
    </div>
</template>

<script>
import ProfilePosts from './ProfilePosts.vue'

    export default {
        name: 'ProfileContent',
        components: {ProfilePosts},
    }

</script>
