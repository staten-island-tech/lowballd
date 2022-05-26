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
                <h1 class="text-2xl mb-4">List an item for sale</h1>
                <div class="grid grid-cols-3 gap-6">

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700"
                      >Title</label
                    >
                    <input
                      v-model="listing.title"
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
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <div class="mt-1">
                    <textarea
                      v-model="listing.description"
                      id="listingdescription"
                      name="description"
                      rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Provide a brief caption for your outfit."
                    ></textarea>
                  </div>
                </div>

                <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700"
                      >Price</label
                    >
                    <input
                      v-model="listing.price"
                      type="number"
                      name="price"
                      id="listingprice"
                      autocomplete="given-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="$xx.xx"
                    />
                  </div>
                  <div class="">
                    <label
                      for="category"
                      class="block text-sm font-medium text-gray-700"
                      >Category</label
                    >
                    <select v-model="listing.category" id="listingcategory" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        <option selected>Choose a category</option>
                        <option value="tops">Tops</option>
                        <option value="bottoms">Bottoms</option>
                        <option value="outerwear">Outerwear</option>
                        <option value="accessories">Accessories</option>
                        <option value="shoes">Shoes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Add photos (up to 5)
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
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
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
  name: "PostMarket",
  components: {
    GlobalNavbar,
    UploadImages,
  },
  data() {
    return {
      listing: {
        date: new Date(),
        title: null,
        description: null,
        price: null,
        category: null,
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
      formData.append("title", this.listing.title);
      formData.append("description", this.listing.description);
        formData.append("category", this.listing.category);
        formData.append("price", this.listing.price);

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
      alert("Post has been saved");
    },
  },
};
</script>

<style scoped>
@import "https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css";
</style>
