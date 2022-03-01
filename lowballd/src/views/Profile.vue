<template>
<ProfileNavbar></ProfileNavbar>
<div class="w-full flex flex-row inline block justify-around">
<ProfileCard></ProfileCard>
<ProfileContent></ProfileContent>
</div>
</template>

<script>
import ProfileNavbar from "../components/profile/ProfileNavbar.vue"
import ProfileCard from "../components/profile/ProfileCard.vue"
import ProfileContent from "../components/profile/ProfileContent.vue"

export default {
    name: 'Profile',
    components: {
        ProfileNavbar, ProfileCard, ProfileContent,
    },
}
</script>