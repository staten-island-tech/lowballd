<template>
  <section class="sm:w-full flex justify-center flex-row flex-wrap my-10">
    <!-- <Filter /> -->
    <div v-for="product in $store.state.products" :id="product.id">
      <Card :product="product" />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { useStore } from "vuex";

import Filter from "./Filter.vue";
import Card from "./Card.vue";

export default {
  name: "MarketLanding",
  components: {
    Card,
    Filter,
  },
  created() {
    this.callApi();
  },
  methods: {
    ...mapActions(["callApi"]),
  },
};
</script>
