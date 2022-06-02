<template>
    <div class="w-8/12 h-auto bg-slate-200 rounded-2xl shadow-lg my-16 pb-8 sm:w-5/6 sm:mx-auto">
        <div v-if="shown === 1">
            <ProfilePosts></ProfilePosts>
        </div>
        <div v-if="shown === 3">
            <ManageAccount></ManageAccount> 
        </div>
        <div v-if="shown === 5">
            <Settings></Settings>
        </div>
        
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
            ProfilePosts,
            Settings,
            ManageAccount,
            ProfileWatchlist,
        },
        props: {
            shown: {
                type: Number,
                default: 1,
            },
        },
        
    }

</script>