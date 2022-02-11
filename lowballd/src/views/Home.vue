<template>
    <Navbar></Navbar>
    <Landing></Landing>
    <About></About>
    <Market></Market>
    <Footer></Footer>
</template>

<script>
import Landing from '../components/home/Landing.vue'
import About from '../components/home/About.vue'
import Market from '../components/home/Market.vue'
import Navbar from '../components/home/Navbar.vue'
import Footer from '../components/footer/Footer.vue'

export default {
    name: 'Home',
    components: {
        Landing, About, Market, Navbar, Footer
    },
}
</script>