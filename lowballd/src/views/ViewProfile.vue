<template>
  <GlobalNavbar></GlobalNavbar>
  <section>
    <div class="flex flex-row justify-center w-4/5 mx-auto p-10">
      <img
        class="rounded w-48 h-48 object-cover object-center"
        :src="profile_picture"
      />
      <div class="flex flex-col justify-center w-1/2 ml-20">
        <p class="font-bold text-3xl">{{ username }}</p>
        <p class="text-gray-600 text-md mb-4">{{ location }}</p>
        <p class="text-md text-slate-500">{{ description }}</p>
        <div class="flex flex-row mt-6">
          <p class="text-lg text-slate-700 pr-4">
            <span class="font-bold">{{ postsCount }}</span> Posts
          </p>
          <p class="text-lg text-slate-700 pr-4">
            <span class="font-bold">{{ listingsCount }}</span> Listings
          </p>
          <p class="text-lg text-slate-700 pr-4">
            <span class="font-bold">{{ followers }}</span> Followers
          </p>
          <p class="text-lg text-slate-700">
            <span class="font-bold">{{ following }}</span> Following
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="flex flex-row justify-center w-4/5 mx-auto divider"></div>
  <div class="flex flex-row justify-center w-4/5 mx-auto">
    <ul class="flex flex-row text-xl">
      <li
        @click="(showFeedPosts = true), (showMarketPosts = false)"
        class="px-16 hover:underline underline-offset-4 hover:-translate-y-1 transition-all ease-in-out cursor-pointer"
      >
        FITS OF THE DAY
      </li>
      <li
        @click="(showFeedPosts = false), (showMarketPosts = true)"
        class="px-16 hover:underline underline-offset-4 hover:-translate-y-1 transition-all ease-in-out cursor-pointer"
      >
        MARKETPLACE LISTINGS
      </li>
    </ul>
  </div>
  <div class="flex flex-row justify-center w-4/5 mx-auto divider"></div>
  <div class="w-4/5 mx-auto">
    <PostGrid v-if="showFeedPosts" :userId="$route.params.id"></PostGrid>
    <ListingGrid
      v-if="showMarketPosts"
      :userId="$route.params.id"
    ></ListingGrid>
  </div>

  <Footer />
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import Footer from "../components/footer/Footer.vue";
import PostGrid from "../components/viewprofile/PostGrid.vue";
import ListingGrid from "../components/viewprofile/ListingGrid.vue";

export default {
  name: "ViewProfile",
  components: {
    GlobalNavbar,
    Footer,
    PostGrid,
    ListingGrid,
  },
  data() {
    return {
      username: null,
      profile_picture: null,
      location: null,
      description: null,
      followers: null,
      following: null,
      postsCount: null,
      listingsCount: null,
      showFeedPosts: true,
      showMarketPosts: false,
    };
  },
  methods: {
    async getUserInfo() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.$route.params.id}`
        );
        const data = await response.json();
        this.username = data.username;
        this.profile_picture = data.profile_picture;
        this.location = data.location;
        this.description = data.description;
        this.followers = data.followers.length;
        this.following = data.following.length;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserPosts() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/posts/profile/${this.$route.params.id}`
        );
        const data = await response.json();
        console.log(data);
        this.postsCount = data.length;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserListings() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/market/profile/${this.$route.params.id}`
        );
        const data = await response.json();
        console.log(data);
        this.listingsCount = data.length;
      } catch (error) {
        console.log(error);
      }
    },
    async followUser() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.$route.params.id}/follow`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getUserInfo();
    this.getUserPosts();
    this.getUserListings();
  },
};
</script>
