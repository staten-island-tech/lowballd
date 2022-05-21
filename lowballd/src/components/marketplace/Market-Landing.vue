<template>
  <section
    class="bg-white my-7 mx-5 sm:mx-0 flex flex-row sm:flex-col justify-center w-full"
  >
    <div class="">
      <Filter v-for="filter in products" />
    </div>
    <div
      class="bg-white sm:justify-center max-w-screen-xl mx-3 flex flex-row flex-wrap"
    >
      <Card
        v-for="product in products"
        :key="product"
        :product="product"
        :name="product.product_title"
        :price="product.product_price"
        :imageUrl="product.product_img"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import Filter from "./Filter.vue";
export default {
  name: "MarketLanding",
  components: {
    Card,
    Filter,
  },
  data() {
    return {
      products: [""],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `https://lowballd-backend.onrender.com/api/market/`
      );
      this.products = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
