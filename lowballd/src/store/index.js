import { createStore } from "vuex";
import router from "@/router";
// Create a new store instance.
const store = createStore({
  state: {
    products: {},
    selectProd: {},
  },

  mutations: {
    loadProduct(state, products) {
      console.log("loadProduct is runned");
      state.products = products;
      console.log(this.state.products);
    },

    loadSelectProd(state, product) {
      console.log("loadSelectProd is runned");
      state.selectProd = product;
      console.log(this.state.selectProd);
    },
  },

  actions: {
    callApi({ commit }) {
      //https://lowballd-backend.onrender.com/api/posts/
      return fetch("https://ghibliapi.herokuapp.com/films/")
        .then((response) => {
          return response.json();
        })
        .then((jsonObj) => {
          commit("loadProduct", jsonObj);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    fetchById({ commit }, id) {
      return fetch(
        `https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`
      )
        .then((response) => {
          return response.json();
        })
        .then((jsonObj) => {
          commit("loadSelectProd", jsonObj);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
