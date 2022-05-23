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
    loadSingleProduct(state, product) {
      console.log('loadSingleProduct is runned');
      state.singleProduct = product;
      console.log(this.state.singleProducts);
    },
    
  },


  actions: {
    callApi({commit}) {
      //https://lowballd-backend.onrender.com/api/posts/
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

    fetchSingleProduct({commit}) {
      //Unable to identify $router.params (???) --> Does not work in actions 
      return fetch( `https://lowballd-backend.onrender.com/api/posts/${this.$route.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(jsonObj => {
        commit("loadSingleProduct", jsonObj);
      })
      .catch(error => {
        console.log(error);
      });
    },
  },

});

export default store;

