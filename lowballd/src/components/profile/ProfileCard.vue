<template>
  <transition name="fade">
    <div v-if="showModal" class="-mt-24 fixed z-10 inset-0 overflow-y-auto">
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
          <div class="p-10 w-[30rem]">
            <h1 class="text-2xl mb-4">Upload a new profile picture</h1>
            <UploadImages
              :max="1"
              maxError="Maximum of 1 file."
              clearAll="Clear All"
              ref="file"
              @change="uploadFile"
            />
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
                class="mr-4 inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-purple-500 text-white leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-200 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                @click="updatePfp()"
              >
                Upload
              </button>
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                @click="showModal = false"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <div class="w-1/5 md:w-3/12 my-16 sm:w-5/6 sm:mx-auto sm:mt-12 sm:mb-6">
    <div class="card text-center shadow-lg bg-slate-200">
      <div class="my-2"></div>
      <div class="avatar mx-auto my-4">
        <div
          class="rounded-full w-24 h-24 ring ring-green-500 ring-offset-base-100 ring-offset-2"
        >
          <img :src="profileData.profile_picture" />
        </div>
        <div
          @click="showModal = true"
          class="cursor-pointer rounded-full border-solid border-2 border-gray-600 w-6 h-6 bg-white absolute top-20 left-16"
        >
          <svg
            class="mt-[3px] fill-gray-800 mx-auto w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"
            />
          </svg>
        </div>
      </div>
      <router-link
        class="hover:cursor-pointer"
        :to="'/profiles/' + this.profileData._id"
      >
        <h1 class="text-2xl">{{ profileData.username }}</h1>
      </router-link>
      <h1 class="text-base md:text-sm">{{ profileData.email }}</h1>
      <div class="flex flex-row justify-center mt-2">
        <p class="text-sm text-slate-700 pr-2">
          <span class="font-bold">{{ followers }}</span>
          Followers
        </p>
        <p class="text-sm text-slate-700">
          <span class="font-bold">{{ following }}</span>
          Following
        </p>
      </div>
      <div class="py-6">
        <button
          @click="this.$emit('set-shown-value', 1)"
          class="btn btn-sm w-4/5 mx-auto mb-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Feed Posts
        </button>
        <button
          @click="this.$emit('set-shown-value', 2)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Listings
        </button>
        <button
          @click="this.$emit('set-shown-value', 3)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Manage Account
        </button>
        <button
          @click="this.$emit('set-shown-value', 4)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Your Purchases
        </button>
        <button
          @click="this.$emit('set-shown-value', 5)"
          class="btn btn-sm w-4/5 mx-auto my-2 bg-gray-100 text-slate-900 hover:bg-sky-100"
        >
          Notification Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UploadImages from "../postfeed/vue-upload-drop-images.vue";
import axios from "axios";

export default {
  name: "ProfileCard",
  emits: ["set-shown-value"],
  components: {
    UploadImages,
  },

  data() {
    return {
      userdata: this.$auth.user,
      authenticationStatus: this.$auth.isAuthenticated,
      profileData: [],
      followers: [],
      following: [],
      showModal: false,
    };
  },

  methods: {
    async callApi() {
      const getUserId = this.userdata.sub.replace("auth0|", "");

      try {
        const token = await this.$auth.getTokenSilently();
        const response = await fetch(
          `https://lowballd-backend.onrender.com/api/user/${getUserId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        this.profileData = data;
        this.followers = data.followers.length;
        this.following = data.following.length;
      } catch (error) {
        console.log(error);
      }
    },
    setShownValue(value) {
      this.$emit("setshownvalue", value);
    },
    async updatePfp() {
      var formData = new FormData();
      const picture = this.$refs.file.files[0];
      formData.append("picture", picture);
      console.log(picture);
      if (picture.length < 1) {
        alert("Please upload an image.");
      } else {
        try {
          const res = await axios.patch(
            `https://lowballd-backend.onrender.com/api/user/update/pfp/${this.profileData._id}`,
            formData,
            {}
          );
          this.$swal({
            icon: "success",
            title: "Your profile picture has been successfully updated",
            text: "you can now view it once the page refreshes",
          });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  created() {
    this.callApi();
  },
  computed: {
    // a computed getter

    totalFollowersInteger: function () {
      return this.profileData.length;
    },
  },
};
</script>
