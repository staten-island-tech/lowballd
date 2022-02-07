<template>
    <div class="w-3/5 h-auto bg-slate-200 my-16 pb-8">
        <ProfilePosts></ProfilePosts>
        <!--<Settings></Settings>-->
        <ManageAccount></ManageAccount>
    </div>
</template>

<script>
import ProfilePosts from './ProfilePosts.vue'
import Settings from './Settings.vue'
import ManageAccount from './ManageAccount.vue'

    export default {
        name: 'ProfileContent',
        components: {
            ProfilePosts, Settings, ManageAccount,
        },
    }
</script>