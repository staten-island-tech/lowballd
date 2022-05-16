import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  
  state: {
    products:{},
    singleProduct: {},
  },

  mutations: {
    loadProduct(state, products) {
      console.log('loadProduct is runned');
      state.products = products;
      console.log(this.state.products);
    },

    loadSingleProd(state, prod) {
      console.log('loadProduct is runned');
      state.singleProduct = prod;
      console.log(this.state.singleProduct);
    },
  },


  actions: {
    callApi({commit}) {
      return fetch("https://lowballd-backend.onrender.com/api/posts/")
        .then(response => {
          return response.json();
        })
        .then(jsonObj => {
          commit("loadProduct", jsonObj);
        })
        .catch(error => {
          console.log(error);
        });

    },

    fetchProduct() {
      return fetch("http://localhost:3001/api/posts/${this.$route.params._id}")
        .then(response => {
          return response.json();
        })
        .then(jsonObj => {
          commit("loadSingleProd", jsonObj);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },

  getters: {
    productPath () {
      return 'marketplace/${this.products._id}'
    }
  }

});

export default store;

