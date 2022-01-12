<template>
    <Landing></Landing>
    <About></About>
    <Market></Market>
</template>

<script>
import Landing from '../components/home/Landing.vue'
import About from '../components/home/About.vue'
import Market from '../components/home/Market.vue'

export default {
    name: 'Home',
    components: {
        Landing, About, Market
    },
}
</script>