import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
  
  state: {
    products: [], 
  },
  actions: {
    // async fetchProducts(context, product) {
    //   const response = await axios.get("http://localhost:3001/api/posts/")
    //   context.commit('SET_PRODUCTS', response.data.results)
    // }

    async callApi() {
        try {
          const response = await fetch("http://localhost:3001/api/posts/", {
          });
          const data = await response.json();
          this.state.products = data;
        } catch (error) {
          console.log(error);
        }
    },


  },

  mutations: {
    SET_PRODUCTS(state, product) {
      state.products = product
    }
  },
  getters: {
    getProducts(state) {
		return state.products
	}
  }



});

export default store;

