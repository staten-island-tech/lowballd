<template>
  <div>
    <div class="flex flex-row">
      <h1 class="text-2xl m-12">Your Feed Posts</h1>
      <div class="form-control pt-10 pr-4">
        <div class="input-group">
          <select class="select select-bordered">
            <option disabled selected>Sort By</option>
            <option>Date (Newest to Oldest)</option>
            <option>Date (Oldest to Newest)</option>
          </select>
          <button class="btn">Sort</button>
        </div>
      </div>
    </div>
    <div class="h-96 w-11/12 mx-auto flex flex-wrap justify-start">
      <UserPost
        v-for="item in postsArray"
        :key="item.id"
        :postImage="item.images[0]"
        :postDate="item.date.slice(4, -42)"
      ></UserPost>
    </div>
  </div>
</template>

<script>
import UserPost from "./profileposts_components/UserPost.vue";
export default {
  name: "ProfilePosts",
  components: {
    UserPost,
  },
  data() {
    return {
      userdata: this.$auth.user,
      postsArray: null,
    };
  },
  methods: {
    async callApi() {
      const getUserId = this.userdata.sub.replace("auth0|", "");
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/posts/profile/${getUserId}`
        );
        const data = await response.json();
        this.postsArray = data.reverse();
        console.log(this.postsArray);
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
