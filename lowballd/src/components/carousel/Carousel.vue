<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    async callApi() {
      // Get the access token from the auth wrapper
      //const token = await this.$auth.getTokenSilently();
      try {
        // const token = await this.$auth.getTokenSilently();
        const response = await fetch(
          "https://lowballd-backend.onrender.com/api/posts/",
          {
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          }
        );
        const data = await response.json();
        console.log(data);
        this.images = data.images;
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

<style></style>
