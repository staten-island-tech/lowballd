<template>
    <Navbar></Navbar>
    <div class="w-full flex flex-row inline block justify-around">
    <Card></Card>
    <ProfileContent></ProfileContent>
    </div>
</template>


<script>
import Card from '../components/profile/Card.vue'
import ProfileContent from '../components/profile/ProfileContent.vue'
import ProfilePosts from '../components/profile/ProfilePosts.vue'
import Navbar from '../components/profile/Navbar.vue'
import ManageAccount from '../components/profile/ManageAccount.vue'

export default {
    name: 'Profile',
    components: {
        Card, ProfileContent, ProfilePosts, Navbar, ManageAccount
    },
}
</script>