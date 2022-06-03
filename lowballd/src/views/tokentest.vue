<template>
  <div>
    <button @click="callApi">Call</button>
    <p>{{ apiMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "Api",
  data() {
    return {
      apiMessage: "",
    };
  },
  methods: {
    async callApi() {
      // Get the access token from the auth wrapper
      //const token = await this.$auth.getTokenSilently();
      try {
        const token = await this.$auth.getTokenSilently();
        const response = await fetch(
          "https://lowballd-backend.onrender.com/authorized",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        this.apiMessage = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
