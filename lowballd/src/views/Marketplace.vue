<template>
      <Navbar2></Navbar2> 
      <MarketLanding> </MarketLanding>
</template>

<script>
import Navbar2 from '../components/marketplace/Navbar2.vue'
import MarketLanding from '../components/marketplace/Market-Landing.vue'
export default {
  name: 'Marketplace',
  components: {
    Navbar2, MarketLanding,
  },
}
</script>
