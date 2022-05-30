<template>
  <GlobalNavbar ref="navbarGlobal" />
  <div class="w-4/5 mx-auto my-6">
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form
            @submit= "postData"
            @submit.prevent= "postData"
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
                      name="Title"
                      id="listing.title"
                    
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
                      id="listing.description"
                      name="description"
                      rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Provide a brief description for what you are selling."
                    ></textarea>
                  </div>
                </div>

                <div class="grid xl:grid-cols-2 xl:gap-6">
                  <div class="relative">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700"
                      >Price</label
                    >
                    <input
                      v-model="listing.price"
                      type="text"
                      inputmode="numeric"
                      name="price"
                      id="listing.price"
                      class="pl-8 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="xx.xx"
                    />
                    <span class="absolute bottom-1.5 left-2 text-gray-700">
                      $
                    </span>
                  </div>
                  <div class="">
                    <label
                      for="category"
                      class="block text-sm font-medium text-gray-700"
                      >Category</label
                    >
                    <select
                      @change="updateCategory()"
                      ref="listingcategory"
                      id="listing.category"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                      <option selected>Choose a category</option>
                      <option value="Tops">Tops</option>
                      <option value="Bottoms">Bottoms</option>
                      <option value="Outerwear">Outerwear</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Shoes">Shoes</option>
                    </select>
                  </div>
                </div>

                <div class="grid xl:grid-cols-2 xl:gap-6">
                  <div class="">
                    <label
                      for="title"
                      class="block text-sm font-medium text-gray-700"
                      >Size</label
                    >
                    <input
                      v-model="listing.size"
                      type="text"
                      name="size"
                      id="listing.size"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="ex. One Size, Small, M, 10.5"
                    />
                  </div>
                  <div class="">
                    <label
                      for="category"
                      class="block text-sm font-medium text-gray-700"
                      >Condition</label
                    >
                    <select
                      @change="updateCondition()"
                      ref="listingcondition"
                      id="listing.condition"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    >
                      <option selected>What condition is this in?</option>
                      <option value="New">New</option>
                      <option value="Open Box">Open Box</option>
                      <option value="Lightly Worn">Lightly Worn</option>
                      <option value="Heavily Worn">Heavily Worn</option>
                      <option value="Poor">Poor Condition</option>
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
                  @click="showAlert"
                  
                  type="button"
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
        title: null,
        description: null,
        price: null,
        category: null,
        size: null,
        condition: null,
      },
    };
  },
  mounted() {
    this.listing.userId = this.$refs.navbarGlobal.userId;
    console.log(this.userId);
  },

  methods: {
    showAlert() {
      
      var title = document.getElementById("listing.title").value;
      var description = document.getElementById("listing.description").value;
      var price = document.getElementById("listing.price").value;
      var size = document.getElementById("listing.size").value;
      var category = document.getElementById("listing.category").value;
      var condition = document.getElementById("listing.condition").value;
        if (title == "" || description =="" || price == "" || size == "" || category == "Choose a category" || condition == "What condition is this in?" ) {
          
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Please fill in the missing fields  to continue",
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
      this.listing.images = this.$refs.file.files;
      console.log(this.listing.images);
    },
    updateCategory() {
      this.listing.category = this.$refs.listingcategory.value;
      console.log(this.listing.category);
    },
    updateCondition() {
      this.listing.condition = this.$refs.listingcondition.value;
      console.log(this.listing.condition);
    },
    async postData() {
      const formData = new FormData();
      formData.append("userId", this.listing.userId);
      formData.append("title", this.listing.title);
      formData.append("description", this.listing.description);
      formData.append("category", this.listing.category);
      formData.append("price", this.listing.price);
      formData.append("size", this.listing.size);
      formData.append("condition", this.listing.condition);

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
