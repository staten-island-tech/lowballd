import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  
  state: {
    products:{
    }, 
  },

  mutations: {
    loadProduct(state, products) {
      console.log('loadProduct is runned');
      state.products = products;
      console.log(state.products);
    },
  },


  actions: {

    callApi({commit}) {
      return fetch("http://localhost:3001/api/posts/")
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

});

export default store;

