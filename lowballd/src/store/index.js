import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  
  state: {
    products:{},
  },

  mutations: {
    loadProduct(state, products) {
      console.log('loadProduct is runned');
      state.products = products;
      console.log(this.state.products);
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
    
  },

});

export default store;

