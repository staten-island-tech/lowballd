<template>
  <GlobalNavbar />
  <MarketLanding></MarketLanding>
  <Footer></Footer>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import MarketLanding from "../components/marketplace/Market-Landing.vue";
import Footer from "../components/footer/Footer.vue";
import axios from 'axios';

export default {
  name: "Marketplace",
  components: {
    MarketLanding,
    Footer,
    GlobalNavbar,
  },
};
</script>
