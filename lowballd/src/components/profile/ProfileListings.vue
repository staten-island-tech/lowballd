<template>
  <div>
    <div class="flex flex-row">
      <h1 class="text-2xl m-12">Your Marketplace Listings</h1>
    </div>
    <div class="h-96 w-11/12 mx-auto flex flex-wrap justify-start">
      <UserListing
        v-for="item in listingArray"
        :productId="item._id"
        :listingImage="item.images[0]"
        :category="item.category"
        :title="item.title"
        :price="item.price"
      ></UserListing>
    </div>
  </div>
</template>

<script>
import UserListing from "./profilelistings_components/UserListing.vue";

export default {
  name: "ProfileListings",
  components: {
    UserListing,
  },
  data() {
    return {
      userdata: this.$auth.user,
      listingArray: null,
    };
  },
  methods: {
    async callApi() {
      const getUserId = this.userdata.sub.replace("auth0|", "");
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/market/profile/${getUserId}`
        );
        const data = await response.json();
        this.listingArray = data.reverse();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.callApi();
  },
};
</script>
