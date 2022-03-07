<template>
  <Navbar></Navbar>
  <MarketLanding></MarketLanding>
  <Footer></Footer>
</template>

<script>
import Navbar from "../components/home/Navbar.vue";
import MarketLanding from "../components/marketplace/Market-Landing.vue";
import Footer from "../components/footer/Footer.vue";
export default {
  name: "Marketplace",
  components: {
    Navbar,
    MarketLanding,
    Footer,
  },
};
</script>
