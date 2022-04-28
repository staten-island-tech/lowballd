import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  
  state: {
    products: [], 
  },

  actions: {
    async callApi() {
      try {
        const response = await fetch("http://localhost:3001/api/posts/", {});
        const data = await response.json();
        return data
      } catch (error) {
        console.log(error);
      }
    },
  },


});

export default store;

