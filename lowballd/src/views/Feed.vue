<template>
  <GlobalNavbar ref="navbarGlobal" />
  <div class="mb-8">
    <h1 class="text-center text-3xl mt-20 font-['Spectral'] font-semibold">
      OUTFIT OF THE DAY
    </h1>
    <h1 class="text-center text-3xl font-['Spectral'] font-semibold">
      WHAT DID YOU WEAR TODAY?
    </h1>
  </div>
  <div class="text-center mx-auto">
    <router-link to="/shareoutfit">
      <button
        type="button"
        class="w-30 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        + Share Outfit
      </button>
    </router-link>
  </div>
  <div class="mx-auto flex flex-wrap">
    <FeedCard
      v-for="item in apiMessage"
      :key="item.id"
      :currentUserId="currentUserId"
      :postId="item._id"
      :userId="item.userId"
      :likeCount="item.likes"
      :commentsCount="item.comments"
      :postTitle="item.title"
      :postDescription="item.description"
      :postImage="item.images[0]"
      :postDate="item.date.slice(4, -42)"
    >
    </FeedCard>
    <Footer />
  </div>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import FeedCard from "../components/Feed/FeedCard.vue";
import Footer from "../components/footer/Footer.vue";

export default {
  name: "Home",
  components: {
    GlobalNavbar,
    FeedCard,
    Footer,
  },
  data() {
    return {
      apiMessage: [],
      currentUserId: null,
    };
  },
  methods: {
    async callApi() {
      try {
        const response = await fetch(
          "https://lowballd-backend.onrender.com/api/posts/"
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
    this.currentUserId = this.$refs.navbarGlobal.userId;
    console.log(this.currentUserId);
    this.callApi();
  },
};
</script>
