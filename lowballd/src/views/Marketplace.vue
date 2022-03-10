<template>
  <Navbar></Navbar>
  <MarketLanding></MarketLanding>
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
  data() {
      return {
          profile_data: [],
      }
  },
  async created() {
      try {
      const res = await axios.get(`http://localhost:3001/profiledata`);
          this.profile_data = res.data[0];
          console.log(res.data[0])
      } catch (error) {
          console.log(error);
      }
  },
};
</script>
