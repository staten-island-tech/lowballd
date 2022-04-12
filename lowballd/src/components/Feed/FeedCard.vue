<template>
  <div>
    <div
      class="bg-slate-200 m-12 p-4 h-[39rem] w-[19.5rem]"
      v-for="post in apiMessage"
      :key="post"
    >
      <div class="flex flex-row">
        <div class="h-12 w-12 rounded-full bg-slate-500"></div>
        <div class="flex flex-col -mt-2">
          <p1 class="m-2 text-xl">online_tutorials</p1>
          <p2 class="-mt-3 ml-2">Patna, India</p2>
        </div>
      </div>
      <h1 class="mt-2">${{ post.price }}</h1>
      <div class="mt-8 bg-slate-500 h-[18rem] w-[17rem]">
        <img :src="post.img" alt="" />
      </div>
      <div class="flex flex-row mt-2">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"
          />
        </svg>
        <svg
          class="ml-2"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75"
          />
        </svg>
        <svg
          class="ml-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"
          />
        </svg>
        <svg
          class="ml-40"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z"
          />
        </svg>
      </div>
      <div>
        <h1 class="mt-2">3,684 likes</h1>
        <h1 class="mt-2">{{ post.caption }}</h1>
        <div class="flex flex-row">
          <h1>
            <span class="font-bold">online_tutorials</span
            ><span class="ml-[4px]">Thanks for your love and supports</span
            ><span class="ml-[4px] text-blue-500">#cards #html #css</span>
          </h1>
        </div>
        <h1 class="mt-2 text-slate-500 font-light">View all 245 comments</h1>
      </div>
      <div class="flex flex-row mt-2">
        <div class="h-8 w-8 rounded-full bg-slate-500"></div>
        <p1 class="m-2 text-slate-400">Add a comment...</p1>
      </div>
      <h1 class="text-slate-500">4 hours ago</h1>
    </div>
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
        this.apiMessage = data;
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
