<template>
    <Navbar></Navbar>
    <Card></Card>
    <ProfileContent></ProfileContent>
</template>

<script>
import Navbar from '../components/profile/Navbar.vue'
import Card from '../components/profile/Card.vue'
import ProfileContent from '../components/profile/ProfileContent.vue'

export default {
    name: 'Profile',
    components: {
        Navbar, Card, ProfileContent
    },
}
</script>