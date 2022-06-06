<template>
  <GlobalNavbar />
  <SearchBar />
  <div class="text-center mx-auto mt-8">
    <router-link to="/sell">
      <button type="button" class="w-30 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">+ Create Listing</button>
    </router-link>
  </div>
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
