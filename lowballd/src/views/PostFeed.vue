<template>
  <div>
    <GlobalNavbar ref="navbarGlobal" />
    <div class="w-4/5 mx-auto my-6">
      <div v-if="this.$auth.isAuthenticated.value">
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
                  <h1 class="text-2xl mb-4">Share your fit with the world</h1>
                  <div class="grid grid-cols-3 gap-6">
                    <div>
                      <label
                        for="date"
                        class="block text-sm font-medium text-gray-700 pb-1"
                        >When did you wear this?</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        ></div>
                        <input
                          type="date"
                          id="start"
                          name="outfit-date"
                          min="2022-01-01"
                          :value="dateToYYYYMMDD(posts.date)"
                          @input="posts.date = $event.target.valueAsDate"
                        />
                      </div>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="title"
                        class="block text-sm font-medium text-gray-700"
                        >Title</label
                      >
                      <input
                        v-model="posts.title"
                        type="text"
                        name="title"
                        id="post-title"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="about"
                      class="block text-sm font-medium text-gray-700"
                      >Description</label
                    >
                    <div class="mt-1">
                      <textarea
                        v-model="posts.description"
                        id="about"
                        name="about"
                        rows="3"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Provide a brief caption for your outfit."
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">
                      Add photos
                    </label>

                    <UploadImages
                      :max="5"
                      maxError="Maximum of 5 files."
                      clearAll="Clear All"
                      ref="file"
                      @change="uploadFile"
                    />
                    <!-- <input type="file" ref="file" accept="image/png, image/jpeg" @change="uploadFile"> -->
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    @click="showAlert"
                    type="submit"
                    class="inline-flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
            <div v-else>
        <div class=" flex items-center justify-center">
          <img class="w-1/6 h-1/6 mt-[10%] " src="https://static.vecteezy.com/system/resources/previews/000/575/468/original/vector-login-sign-icon.jpg">
        </div>
        <h1 class="text-center text-4xl mb-[10%]">Please <a class="hover:text-indigo-700 underline hover:cursor-pointer" @click="login()">login</a> to post a listing.</h1>  
      </div>
    </div>
  <Footer/>
  </div>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import UploadImages from "../components/postfeed/vue-upload-drop-images.vue";
import axios from "axios";

export default {
  name: "PostFeed",
  components: {
    GlobalNavbar,
    UploadImages,
  },
  data() {
    return {
      posts: {
        date: new Date(),
        title: null,
        description: null,
        images: null,
        userId: null,
      },
    };
  },

  mounted() {
    this.posts.userId = this.$refs.navbarGlobal.userId;
    console.log(this.userId);
  },
  methods: {
    showAlert() {
      
      var title = document.getElementById("post-title").value;
      var about = document.getElementById("about").value;
      var start = document.getElementById("start").value;
        if (this.$refs.file.files.length === 0 || title == "" || about =="" || start == "mm/dd/yyyy" /*|| (document.getElementById('attachment').value !=="" )*/) {
          
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Please fill in the missing fields to continue",
            });

        }
        else{
          
            this.$swal({
        icon: "success",
        title: "Your post has been successfully saved",
        html:
          "Click " +
          '<a href="/"><b>here</b></a> ' +
          "to return to the homepage",
      });
        }
      
    },




    uploadFile() {
      this.posts.images = this.$refs.file.files;
      console.log(this.posts.images);
    },
    async postData(e) {
      const formData = new FormData();
      formData.append("userId", this.posts.userId);
      formData.append("title", this.posts.title);
      formData.append("description", this.posts.description);
      // formData.append('pictures', this.posts.images, this.posts.images.name);
      for (var i = 0; i < this.posts.images.length; i++) {
        let file = this.posts.images[i];
        formData.append("pictures", file, file.name);
      }

      formData.append("date", this.posts.date);
      const headers = { "Content-Type": `multipart/form-data` };
      const res = await axios.post(
        "https://lowballd-backend.onrender.com/api/posts/upload",
        formData,
        { headers }
      );
      console.log(res);
      alert("Post has been saved");
    },
    dateToYYYYMMDD(d) {
      // alternative implementations in https://stackoverflow.com/q/23593052/1850609
      return (
        d &&
        new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
          .toISOString()
          .split("T")[0]
      );
    },
        // Log the user in
    async login() {
      this.$auth.loginWithRedirect({
        returnTo: window.location.origin,
      });
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style scoped>
@import "https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css";
</style>
