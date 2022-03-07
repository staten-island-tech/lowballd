<template>
<Navbar></Navbar>
<div class="w-full flex flex-row inline block justify-around">
<ProfileCard></ProfileCard>
<ProfileContent></ProfileContent>
</div>
</template>

<script>
import Navbar from "../components/home/Navbar.vue";
import ProfileCard from "../components/profile/ProfileCard.vue";
import ProfileContent from "../components/profile/ProfileContent.vue";

export default {
    name: 'Profile',
    components: {
        Navbar, ProfileCard, ProfileContent,
    },
}
</script>