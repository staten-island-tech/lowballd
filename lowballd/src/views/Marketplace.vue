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
