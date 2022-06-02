<template>
  <GlobalNavbar ref="navbarGlobal" />
  <div class="w-4/5 mx-auto my-6">
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form
            @submit.prevent="postData"
            action="#"
            method="POST"
            enctype="multipart/form-data"
          >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <h1 class="text-2xl mb-4">Welcome to Lowballd!</h1>
                <p class="text-lg mb-4">Thank you for signing up. Please fill out the following fields to finalize your account creation.</p>
                <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700"
                      >Username</label
                    >
                    <input
                      v-model="profile.username"
                      type="text" 
                      inputmode="numeric"
                      name="price"
                      id="username"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700"
                      >Location</label
                    >
                    <input
                      v-model="profile.location"
                      type="text"
                      name="size"
                      id="location"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="ex. New York, NY"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Biography</label
                  >
                  <div class="mt-1">
                    <textarea
                      v-model="profile.biography"
                      id="biography"
                      name="biography"
                      rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Tell us about yourself!"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Upload your profile picture
                  </label>

                  <UploadImages
                    :max="5"
                    maxError="Maximum of 1 file upload."
                    clearAll="Clear All"
                    ref="file"
                    @change="uploadFile"
                  />
                  <!-- <input type="file" ref="file" accept="image/png, image/jpeg" @change="uploadFile"> -->
                </div>

              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import UploadImages from "../components/postfeed/vue-upload-drop-images.vue";
import axios from "axios";

export default {
  name: "ProfileSetup",
  components: {
    GlobalNavbar,
    UploadImages,
  },
  data() {
    return {
      profile: {
        userId: null,
        username: null,
        location: null,
        biography: null,
      },
    };
  },
  mounted() {
    this.listing.userId = this.$refs.navbarGlobal.userId;
    console.log(this.userId);
  },
  methods: {
    uploadFile() {
      this.listing.images = this.$refs.file.files;
      console.log(this.listing.images);
    },
    async postData(e) {
        const formData = new FormData();
        formData.append("userId", this.listing.userId);
        formData.append("username", this.listing.username);
        formData.append("location", this.listing.location);
        formData.append("biography", this.listing.biography);
        
      for (var i = 0; i < this.listing.images.length; i++) {
        let file = this.listing.images[i];
        formData.append("pictures", file, file.name);
      }

      const headers = { "Content-Type": `multipart/form-data` };
      const res = await axios.post(
        "http://localhost:3001/api/market/upload",
        formData,
        { headers }
      );
      console.log(res);
    },
  },
};
</script>