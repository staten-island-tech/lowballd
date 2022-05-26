<template>
  <GlobalNavbar />
  <SearchBar />
  <MarketLanding></MarketLanding>
  <Footer />
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import MarketLanding from "../components/marketplace/Market-Landing.vue";
import Footer from "../components/footer/Footer.vue";
import SearchBar from "../components/searchbar/SearchBar.vue";
import axios from "axios";

export default {
  name: "Marketplace",
  components: {
    MarketLanding,
    Footer,
    GlobalNavbar,
    SearchBar,
  },
};
</script>
