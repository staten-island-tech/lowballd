<template>
  <Navbar></Navbar>
  <MarketLanding></MarketLanding>
  <Footer></Footer>
</template>

<script>
import Navbar from "../components/marketplace/Navbar.vue";
import MarketLanding from "../components/marketplace/Market-Landing.vue";
import Footer from "../components/footer/Footer.vue";
export default {
  name: "Marketplace",
  components: {
    Navbar,
    MarketLanding,
    Footer,
  },
  methods: {
  async addArray() {
    const { data } = await axios.post("http://http://localhost:3001/products");
    
    console.log(this.product_img);
  }
}
};
</script>
