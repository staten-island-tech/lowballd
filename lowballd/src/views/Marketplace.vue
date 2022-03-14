<template>
  <Navbar></Navbar>
  <MarketLanding v-for="product in products" 
    :key="product" 
    :prod="product" />
  <Footer></Footer>
</template>

<script>
import Navbar from "../components/marketplace/Navbar.vue";
import MarketLanding from "../components/marketplace/Market-Landing.vue";
import Footer from "../components/footer/Footer.vue";
import axios from 'axios';
export default {
  name: "Marketplace",
  components: {
    Navbar,
    MarketLanding,
    Footer,
  },
  data () {
      return {
          products: [],
      }
  },
  async created() {
      try {
      const res = await axios.get(`http://localhost:3001/products`);
          this.products = res.data[0];
          console.log(res.data[0]);
      } catch (error) {
          console.log(error);
      }
  },
};
</script>
