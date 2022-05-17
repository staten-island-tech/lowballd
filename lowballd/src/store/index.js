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
      console.log('loadSingleProduct is runned');
      state.singleProduct.push(prod);
      console.log(this.state.singleProduct);
    },
  },


  actions: {
    callApi({commit}) {
      //https://lowballd-backend.onrender.com/api/posts/
      return fetch("https://ghibliapi.herokuapp.com/films/")
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
  },

  getters: {
    productPath () {
      return 'marketplace/${this.products._id}'
    },
  }

});

export default store;

