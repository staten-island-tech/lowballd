<template>
  <div
    class="m-10 w-96 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl"
  >
    <div>
      <div
        class="text-white text-xs font-bold rounded-lg bg-purple-500 inline-flex mt-4 ml-4 py-2 px-3 cursor-pointer"
      >
        <div class="w-4 h-4 fill-white mr-2 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"
            />
          </svg>
        </div>
        <span class="pt-[2.5px]">
          {{ postDate }}
        </span>
      </div>
      <h1
        class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100"
      >
        {{ postTitle }}
      </h1>
      <p class="ml-4 mt-1 mb-2 text-gray-700 cursor-pointer">
        {{ descPreview }}
      </p>
    </div>
    <div
      class="w-full h-96 bg-cover bg-center cursor-pointer"
      :style="backgroundStyles(postImage)"
    ></div>
    <div class="flex p-4 justify-between">
      <div class="flex items-center space-x-2">
        <img class="w-10 h-10 cover rounded-full" :src="profilePicture" />
        <h2 class="text-gray-800 font-bold cursor-pointer">{{ username }}</h2>
      </div>
      <div class="flex space-x-2">
        <div class="flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-gray-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </span>
          <span>{{ comments }}</span>
        </div>
        <div class="flex space-x-1 items-center">
          <span @click="likePost()">
            <svg
              ref="heartIcon"
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-gray-500 hover:text-red-400 transition duration-100 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>{{ likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { useStore } from "vuex";
import axios from "axios";

export default {
  name: "FeedCard",
  data() {
    return {
      username: null,
      profilePicture: null,
      likes: 0,
      comments: 0,
      descPreview: null,
      id: null,
    };
  },
  props: {
    currentUserId: String,
    userId: String,
    postId: String,
    likeCount: Array,
    postTitle: String,
    postDate: String,
    postImage: String,
    postDescription: String,
    postCategory: String,
    postPrice: String,
    postSize: String,
    postCondition: String,
  },
  methods: {
    backgroundStyles(postImage) {
      return {
        "background-image": `url(${postImage})`,
      };
    },
    async likePost() {
      const likeData = { userId: `${this.currentUserId}` };
      console.log(likeData);
      const res = await axios.put(
        `http://localhost:3001/api/posts/${this.postId}/like`,
        {
          userId: `${this.currentUserId}`,
        }
      );
      console.log(res);
      const heartButton = this.$refs.heartIcon;
      if (res.data === "Liked") {
        this.likes += 1;
        heartButton.classList.add("text-red-500");
      } else {
        this.likes -= 1;
        heartButton.classList.remove("text-red-500");
      }
    },
    async getUserInfo() {
      try {
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${this.userId}`
        );
        const data = await response.json();
        this.username = data.username;
        this.profilePicture = data.profile_picture;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getUserInfo();
    const heartButton = this.$refs.heartIcon;
    if (this.likeCount.includes(this.currentUserId)) {
      heartButton.classList.add("text-red-500");
    }
  },
  created() {
    for (let i = 0; i < this.likeCount.length; i++) {
      this.likes += 1;
    }
    if (this.postDescription.length > 45) {
      this.descPreview = this.postDescription.substring(0, 45) + "...";
    } else {
      this.descPreview = this.postDescription;
    }
  },
  methods: {
    ...mapActions(["callApi"]),
  },

  // data() {
  //   return {
  //     userdata: this.$auth.user,
  //     profileData: [],
  //     token: null,
  //     userId: null,
  //     newStr: null,
  //   };
  // },
};
</script>
