<template>
  <div>
    <button @click="callApi">Call</button>
    <p>{{ apiMessage }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "api",
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
        const response = await fetch("http://localhost:3000/authorized", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        this.apiMessage = data;
      } catch (error) {
        console.log(error);
      }
      // Use Axios to make a call to the API
      /*  const { data } = await axios
        .get("localhost:3000/authorized", {
          headers: {
            Authorization: `Bearer ${token}`, // send the access token through the 'Authorization' header
          },
        })
        .then(console.log(data))
        .catch(function (error) {
          console.log(error);
        });
      this.apiMessage = data; */
    },
  },
};
</script>
