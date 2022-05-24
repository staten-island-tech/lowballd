import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  
  state: {
    products:{},
    test: {},
  },

  mutations: {
    loadProduct(state, products) {
      console.log('loadProduct is runned');
      state.products = products;
      console.log(this.state.products);
    },
    test(state, a) {
      console.log('test is runned');
      state.test = a;
      console.log(this.state.test);
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

    async Test({ commit }, { cat }) {
      const products = await axios("https://lowballd-backend.onrender.com/api/posts/", {
        method: "GET",
        params: {
          id,
        }
      })
      commit('test', products.data)
      return products
    }

    // Test({commit},{id}) {
    //   //Unable to identify $router.params (???) --> Does not work in actions 
    //   return fetch( `https://lowballd-backend.onrender.com/api/posts/${id}`)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(jsonObj => {
    //     commit("test", jsonObj);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // },
  },

});

export default store;

