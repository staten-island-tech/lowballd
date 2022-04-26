<template>
<div class="bg-slate-200 m-12 p-4 h-[34rem] w-[21.5rem]">
  <div class="flex flex-row">
    <div class="h-12 w-12 rounded-full bg-slate-500"></div>
        <p1 class="m-2 text-xl">online_tutorials</p1>
        <h1 class="text-slate-500 text-lg mt-2 ml-6">4 hours ago</h1>
  </div>
      <div class="mt-8 bg-slate-500 h-[18rem] w-[19.5rem]">
      </div>
      <div class="flex flex-row mt-2 w-96">
      <div class="flex flex-row">
      <svg class="-ml-[4px] mr-2" xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>
      <h1 class="w-24 mt-[3px] -ml-[8px] text-sm">3,684 likes</h1>
      </div>
      <div class="flex flex-row">
     <svg class="-ml-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z"/></svg>
      <h1 class="w-28 mt-[3px] ml-[6px] text-sm">3,684 comments</h1>
      </div>
      <div class="ml-6 w-96 flex flex-row">
      <svg class="ml-[12px]" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z"/></svg>
      </div>
      <!--<svg class="ml-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z"/></svg>-->
      </div>
      <div class="mt-2">
      <div class="flex flex-row">
        <h1><span class="">Thanks for your love and supports</span><span class="ml-[4px] text-blue-500">#cards #html #css</span><span class="ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> </h1>
      </div>
      </div>
      <!--<h1 class="mt-2 text-slate-500 font-light">View all 245 comments</h1>
      <div class="flex flex-row mt-2">
        <div class="h-8 w-8 rounded-full bg-slate-500"></div>
            <p1 class="m-2 text-slate-400">Add a comment...</p1>
      </div>-->
</div>
</template>

<script>
export default {
  props: ["name"],
  name: "FeedCard",
  data() {
    return {
      apiMessage: "",
    };
  },
  methods: {
    async callApi() {
      // Get the access token from the auth wrapper
      //const token = await this.$auth.getTokenSilently();
      try {
        // const token = await this.$auth.getTokenSilently();
        const response = await fetch("http://localhost:3001/api/posts/", {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        });
        const data = await response.json();
        console.log(data);
        this.apiMessage = data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
