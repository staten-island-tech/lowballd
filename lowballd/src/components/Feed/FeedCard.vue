<template>
  <transition name="fade">
    <div v-show="showModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          @click="showModal = false"
          class="fixed inset-0 transition-opacity"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="p-10 w-[60rem] h-[32rem] flex flex-row justify-between">
            <div class="w-[27rem]">
              <div
                class="rounded-2xl w-full h-[27rem] bg-cover bg-center cursor-pointer"
                :style="backgroundStyles(postImage)"
              ></div>
            </div>

            <div class="w-[25rem] h-[27rem] flex flex-col justify-between">
              <div class="flex flex-col">
                <div
                  class="text-gray-700 text-lg font-bold rounded-lg inline-flex mt-4 ml-4 py-2 cursor-pointer"
                >
                  <div class="w-4 h-4 mt-1 fill-black mr-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"
                      />
                    </svg>
                  </div>
                  <span class="pt-[2.5px]">
                    {{ postDate }}
                  </span>
                </div>

                <div></div>

                <div class="flex flex-col flex-grow">
                  <h1
                    class="text-3xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100"
                  >
                    {{ postTitle }}
                  </h1>
                  <p class="ml-4 mt-1 mb-2 text-gray-700 cursor-pointer">
                    {{ postDescription }}
                  </p>
                </div>
              </div>

              <div class="flex p-4 justify-between">
                <div class="flex items-center space-x-2">
                  <img
                    class="w-10 h-10 cover rounded-full"
                    :src="profilePicture"
                  />
                  <h2 class="text-gray-800 font-bold cursor-pointer">
                    {{ username }}
                  </h2>
                </div>
                <div class="flex space-x-2">
                  <div class="flex space-x-1 items-center">
                    <span @click="showComments = true">
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
                        ref="modalHeartIcon"
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
          </div>

          <div
            class="flex justify-between bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          >
            <div></div>
            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-180 sm:text-sm sm:leading-5"
                @click="showModal = false"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <transition name="fade">
    <div v-show="showComments" class="-mt-4 fixed z-30 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          @click="showComments = false"
          class="fixed inset-0 transition-opacity"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
        >&#8203;
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div
            class="p-10 w-[30rem] h-[30rem] flex flex-row justify-between flex flex-col"
          >
            <div>
              <h1 class="text-3xl font-bold text-gray-800 -mb-6">Comments</h1>
            </div>

            <div class="overflow-scroll h-4/6 w-full">
              <UserComment
                v-for="comment in commentsCount"
                :userId="comment.userId"
                :comment="comment.comment"
                :date="comment.date"
              ></UserComment>
            </div>
            <div class="w-full h-1/6">
              <div class="flex justify-between">
                <div class="w-4/5 mt-1">
                  <textarea
                    v-model="userComment"
                    id="commentbox"
                    name="commentbox"
                    rows="2"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  @click="postComment"
                  class="mt-2 w-1/5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          <div
            class="flex justify-between bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
          >
            <div></div>
            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                @click="showComments = false"
              >
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <div
    class="m-10 w-96 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.01] hover:shadow-2xl"
  >
    <div @click="showModal = true">
      <div>
        <div
          class="text-white text-xs font-bold rounded-lg bg-green-500 inline-flex mt-4 ml-4 py-2 px-3 cursor-pointer"
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
    </div>
    <div class="flex p-4 justify-between">
      <div class="flex items-center space-x-2">
        <img class="w-10 h-10 cover rounded-full" :src="profilePicture" />
        <h2 class="text-gray-800 font-bold cursor-pointer">{{ username }}</h2>
      </div>
      <div class="flex space-x-2">
        <div class="flex space-x-1 items-center">
          <span @click="showComments = true">
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
import axios from "axios";
import UserComment from "./UserComment.vue";

export default {
  name: "FeedCard",
  components: {
    UserComment,
  },
  data() {
    return {
      username: null,
      profilePicture: null,
      likes: 0,
      comments: 0,
      descPreview: null,
      id: null,
      showModal: false,
      showComments: false,
      userComment: null,
    };
  },
  props: {
    currentUserId: String,
    userId: String,
    postId: String,
    likeCount: Array,
    commentsCount: Array,
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
      if (!this.$auth.isAuthenticated.value) {
        alert("please login to like this post");
        return;
      } else {
        const likeData = { userId: `${this.currentUserId}` };
        console.log(likeData);
        const res = await axios.put(
          `https://lowballd-backend.onrender.com/api/posts/${this.postId}/like`,
          {
            userId: `${this.currentUserId}`,
          }
        );
        console.log(res);
        const heartButton = this.$refs.heartIcon;
        const modalHeartButton = this.$refs.modalHeartIcon;

        if (res.data === "Liked") {
          this.likes += 1;
          heartButton.classList.add("text-red-500");
          modalHeartButton.classList.add("text-red-500");
        } else {
          this.likes -= 1;
          heartButton.classList.remove("text-red-500");
          modalHeartButton.classList.remove("text-red-500");
        }
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
    async postComment() {
      if (!this.$auth.isAuthenticated.value) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Please login to continue",
        });
        return;
      }
      let commentDate = new Date();
      let dd = commentDate.getDate();

      let mm = commentDate.getMonth() + 1;
      const yyyy = commentDate.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }

      if (mm < 10) {
        mm = `0${mm}`;
      }
      commentDate = `${mm}-${dd}-${yyyy}`;

      if (this.userComment.length < 1) {
        alert("Please enter a comment");
      } else {
        const commentData = {
          userId: `${this.currentUserId}`,
          comment: `${this.userComment}`,
          date: `${commentDate}`,
        };
        const res = await axios.patch(
          `https://lowballd-backend.onrender.com/api/posts/${this.postId}/comment`,
          commentData
        );
        this.$swal({
          icon: "success",
          title: "Your comment has been successfully posted",
          text: "you can now view it once the page refreshes",
        });
      }
    },
  },
  mounted() {
    this.getUserInfo();
    const heartButton = this.$refs.heartIcon;
    const modalHeartButton = this.$refs.modalHeartIcon;
    if (this.likeCount.includes(this.currentUserId)) {
      heartButton.classList.add("text-red-500");
      modalHeartButton.classList.add("text-red-500");
    }
  },
  created() {
    for (let i = 0; i < this.likeCount.length; i++) {
      this.likes += 1;
    }
    for (let i = 0; i < this.commentsCount.length; i++) {
      this.comments += 1;
    }
    if (this.postDescription.length > 45) {
      this.descPreview = this.postDescription.substring(0, 45) + "...";
    } else {
      this.descPreview = this.postDescription;
    }
  },
};
</script>
