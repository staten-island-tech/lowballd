<template>
    <Navbar></Navbar>
    <div class="w-full h-full flex flex-row inline block justify-around">
    <Card></Card>
    <ProfileContent></ProfileContent>
    </div>
</template>

<script>
import Navbar from '../components/profile/Navbar.vue'
import Card from '../components/profile/Card.vue'
import ProfileContent from '../components/profile/ProfileContent.vue'
import ProfilePosts from '../components/profile/ProfilePosts.vue'

export default {
    name: 'Profile',
    components: {
        Navbar, Card, ProfileContent, ProfilePosts
    },
}
</script>