<template>
  <GlobalNavbar></GlobalNavbar>
    <router-link to="/marketplace" class="mx-56">←	 Back to Marketplace</router-link>
    <section class="text-gray-700 overflow-hidden bg-white">
    <div class="container px-5 py-12 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img :src="prod.images[0]" class="w-1/2 object-cover object-center rounded border border-gray-200">
            <div class="w-1/2 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <router-link class="hover:cursor-pointer" :to="'/profiles/' + prod.userId">
                <div class="flex items-center space-x-4 -mt-8 mb-6">
                  <img class="w-12 h-12 object-cover object-center rounded-full" :src="profile_picture" />
                  <h2 class="text-gray-800 text-xl font-bold cursor-pointer">{{ username }}</h2>
                </div>
              </router-link>
                <h2 class="text-sm title-font text-gray-700 tracking-widest">{{ prod.category }}</h2>
                <h1 class="text-gray-900 text-4xl title-font font-bold mb-1">{{ prod.title }}</h1>
                <div class="flex mb-4">
                    <span class="title-font font-medium text-2xl text-gray-900">${{ prod.price }}</span>
                </div>
                <p class="leading-relaxed my-4">{{ prod.description }}</p>
                <div class="flex flex-row">
                  <div class="mr-8">
                    <p class="font-bold">Condition</p>
                    <p>{{ prod.condition }}</p>
                  </div>
                  <div class="mr-8">
                    <p class="font-bold">Size</p>
                    <p>{{ prod.size }}</p>
                  </div>
                  <div>
                    <p class="font-bold">Listed Since</p>
                    <p>{{ createdDate }}</p>
                  </div>
                </div>
                <div class="flex border-t border-gray-300 mt-5 pt-5">
                    <button type="submit" class="bg-gray-800 duration-200 focus:outline-none focus:shadow-outline font-medium h-12 hover:bg-gray-900 inline-flex items-center justify-center px-6 text-white tracking-wide transition w-full">
                        Message Seller
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

  <section class="text-gray-700 overflow-hidden bg-white">
      <div class="container px-5 py-12 mx-auto">
        <p class="text-2xl mx-32">You might also like</p>
      </div>
  </section>

  <Footer></Footer>
</template>

<script>
import GlobalNavbar from "../GlobalNavbar.vue";
import Footer from "../footer/Footer.vue";


export default {
  name: "productTest",
  components: {
    GlobalNavbar, Footer
  },
  data() {
    return {
      prod: {},
      createdDate: null,
      username: null,
      profile_picture: null,
    };
  },
  methods: {
    async getDataById() {
      console.log(this.$route.params.id);
      const response = await fetch(
        //Think the url changed - waiting for confirmation 
        `https://lowballd-backend.onrender.com/api/market/${this.$route.params.id}`
      );
      const data = await response.json();
      this.prod = data;

      let month = this.prod.createdAt.slice(5, 7);
      let day = this.prod.createdAt.slice(8, 10);
      let year = this.prod.createdAt.slice(0, 4);
      this.createdDate = `${month}/${day}/${year}`;
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.prod.userId}`
        );
        const data = await response.json();
        this.username = data.username;
        this.profile_picture = data.profile_picture;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDataById();
  },
  
};
</script>

