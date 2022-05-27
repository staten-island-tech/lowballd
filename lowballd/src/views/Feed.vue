<template>
  <GlobalNavbar />
  <div>
    <h1 class="text-center text-3xl mt-20 font-['Spectral'] font-semibold">
      OUTFIT OF THE DAY
    </h1>
    <h1 class="text-center text-3xl font-['Spectral'] font-semibold">
      WHAT DID YOU WEAR TODAY?
    </h1>
    <div class="flex items-center justify-center">
      <button
        class="mb-20 mt-6 mr-5 text-xl border-b-2 border-double border-transparent hover:border-current hover:font-bold cursor-pointer select-none"
      >
        Trending</button
      ><button
        class="mb-20 mt-6 mr-5 text-xl border-b-2 border-double border-transparent hover:border-current cursor-pointer hover:font-bold select-none"
      >
        Following
      </button>
    </div>
  </div>
  <div class="mx-auto flex flex-wrap">
    <FeedCard v-for="item in apiMessage"
        :key="item.id"
        :postTitle="item.title"
        :postDescription="item.description"
        :postImage="item.images[0]"
        :postDate="item.date.slice(4,-42)">
    </FeedCard>
  </div>
  
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import FeedCard from "../components/Feed/FeedCard.vue";

export default {
  name: "Home",
  components: {
    GlobalNavbar,
    FeedCard,
  },
  data() {
    return {
      apiMessage: [],
    };
  },
  methods: {
    async callApi() {
      // Get the access token from the auth wrapper
      //const token = await this.$auth.getTokenSilently();
      try {
        // const token = await this.$auth.getTokenSilently();
        const response = await fetch(
          "https://lowballd-backend.onrender.com/api/posts/",
          {
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          }
        );
        const data = await response.json();
        console.log(data);
        this.apiMessage = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.callApi();
  },
};
</script>
