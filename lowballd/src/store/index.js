import { createStore } from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    product: [
      {
        product_title: "Carhartt Double Knee Cargo Tactical Pants",
        product_img: "https://media-photos.depop.com/b0/27687955/1173757715_0f031502cba145aea2d146dafb6fb8b3/P0.jpg",
        product_price: "79.00",
        product_style: "Pant",
        product_size: "",
        product_brand: "",
        product_condition: "",
        product_color: "",
        product_shipping: "",
      }
    ], cart: []
  },
  mutations: {
    addCartItem(state, item) {
      item.quantity = 1;
      state.cart.push(item);
    },
    updateCartItem(state, updatedItem) {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.title == updatedItem.title) {
          return updatedItem;
        }

        return cartItem;
      });
    },
    removeCartItem(state, item) {
      state.cart = state.cart.filter((cartItem) => {
        return cartItem.title != item.title;
      });
    }
  }
});



