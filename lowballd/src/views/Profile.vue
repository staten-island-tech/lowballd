<template>
<GlobalNavbar></GlobalNavbar>
<div class="w-full flex flex-row justify-around sm:flex sm:flex-col sm:justify-center">
    <ProfileCard></ProfileCard>
    <ProfileContent></ProfileContent>
</div>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue"
import ProfileContent from "../components/profile/ProfileContent.vue"

export default {
    name: 'Profile',
    components: {
        GlobalNavbar, ProfileCard, ProfileContent,
    },
}
</script>