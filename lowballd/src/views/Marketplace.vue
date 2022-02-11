<template>
      <Navbar></Navbar> 
      <MarketLanding></MarketLanding>
      <Footer2></Footer2>
</template>

<script>
import Navbar from '../components/marketplace/Navbar.vue'
import MarketLanding from '../components/marketplace/Market-Landing.vue'
import Footer2 from '../components/footer/Footer2.vue'
export default {
  name: 'Marketplace',
  components: {
    Navbar, MarketLanding, Footer2,
  },
}
</script>