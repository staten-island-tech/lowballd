<template>
    <div class="w-8/12 h-auto bg-slate-200 rounded-2xl shadow-lg my-16 pb-8 sm:w-5/6 sm:mx-auto">
        <ProfilePosts></ProfilePosts>
        <!-- <Settings></Settings> -->
        <ManageAccount></ManageAccount>
    </div>
</template>

<script>
import ProfilePosts from './ProfilePosts.vue'
import Settings from './Settings.vue'
import ManageAccount from './ManageAccount.vue'
import ProfileWatchlist from './ProfileWatchlist.vue'

    export default {
        name: 'ProfileContent',
        components: {
            ProfilePosts, Settings, ManageAccount, ProfileWatchlist,
        },
    }
</script>