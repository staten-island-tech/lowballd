<template>

    <GlobalNavbar />
    <div class="w-4/5 mx-auto my-6">
      
<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="postData" action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h1 class="text-2xl mb-4">Share your fit with the world</h1>
            <div class="grid grid-cols-3 gap-6">

              <div>
                <label for="date" class="block text-sm font-medium text-gray-700 pb-1">When did you wear this?</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input type="date" id="start" name="outfit-date"
       min="2022-01-01" :value="dateToYYYYMMDD(posts.date)"
                       @input="posts.date = $event.target.valueAsDate">
                
              </div>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input v-model="posts.title" type="text" name="title" id="post-title" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>
              
            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">Description</label>
              <div class="mt-1">
                <textarea v-model="posts.description" id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Provide a brief caption for your outfit."></textarea>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"> Add photos </label>

                <UploadImages :max="1" maxError="Maximum of 1 file." clearAll="Clear All" ref="upload"/>

            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
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
import UploadImages from "../components/postfeed/vue-upload-drop-images.vue"

export default {
  name: "PostFeed",
  components: {
    GlobalNavbar, UploadImages
  },
  data(){
    return {
      posts: {
        date: new Date('2022-01-01T00:01:01Z'),
        title: null,
        description: null,
        img: null,
      },
    }
  },
  methods: {
    postData(e){
      this.posts.img = this.$refs.upload.files[0]
      console.log(this.posts)
      e.preventDefault();
    },
    dateToYYYYMMDD(d) {
      // alternative implementations in https://stackoverflow.com/q/23593052/1850609
    	return d && new Date(d.getTime()-(d.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]
    }
  }
};
</script>

<style scoped>
@import 'https://unpkg.com/flowbite@1.4.1/dist/flowbite.min.css';
</style>