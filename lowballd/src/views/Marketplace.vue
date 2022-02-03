<template>
      <Navbar></Navbar> 
      <MarketLanding></MarketLanding>
</template>

<script>
import Navbar from '../components/marketplace/Navbar.vue'
import MarketLanding from '../components/marketplace/Market-Landing.vue'
export default {
  name: 'Marketplace',
  components: {
    Navbar, MarketLanding,
  },
}
</script>
