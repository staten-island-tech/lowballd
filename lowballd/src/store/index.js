import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
  
  state: {
    products: [
      {
        product_title: "Carhartt Double Knee Cargo Tactical Pants",
        product_img: "https://media-photos.depop.com/b0/27687955/1173757715_0f031502cba145aea2d146dafb6fb8b3/P0.jpg",
        product_price: "79.00",
        product_style: "Pant",
        product_size: "",
        product_brand: "",
        product_condition: "",
        product_color: "vu",
        product_shipping: "",
      },
      {
        product_title: "Dr. Marten Gray Suede Industrial Boots",
        product_img: "https://media-photos.depop.com/b0/14864161/1181924176_4c27d7c0143349eda377a76893e71d4d/P0.jpg",
        product_price: "89.00",
        product_style: "Shoes",
        product_size: "",
        product_brand: "",
        product_condition: "",
        product_color: "vue",
        product_shipping: "",
      },
      {
        product_title: "Hard Rock Niagara Falls Tee",
        product_img: "https://media-photos.depop.com/b0/33314125/1183416694_7d34845ebc5143fbb67cd568b44b9fd3/P0.jpg",
        product_price: "15.00",
        product_style: "Shirts",
        product_size: "Small",
        product_brand: "",
        product_condition: "",
        product_color: "vuex",
        product_shipping: "Varies",
      },
      {
        product_title:"Fun Product That Does Something Cool",
        product_img: "https://images.unsplash.com/photo-1627844541143-a561a1a9b72a",
        product_price: "125.00",
        product_style:  "High Top Jordan Air",
        product_size: "Small",
        product_brand: "Nike",
        product_condition: "Brand New",
        product_color: "Red-Black",
        product_shipping: "Free",
      },

    ], 
    cart: [],
    keywords: "",
    posts: []


  },
  mutations: {
    FETCH_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    fetchUsers({ commit }, { self }) {          
      Vue.http.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          commit("FETCH_USERS", response.body);
          self.filterUsers();   
        })
        .catch((error) => {
          console.log(error.statusText)
        });
    }
  }



});

export default store;

