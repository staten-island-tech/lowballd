<template>
  <div>
    <GlobalNavbar />
    <token></token>
    <div class="h-screen w-screen flex flex-col justify-center">
      <div class="flex flex-row justify-around -mt-12 h-96">
        <div class="h-2/3 w-1/3 text-left">
          <p class="font-normal mb-1">— NOW PRESENTING</p>
          <h1 class="font-bold text-6xl mb-4">Lowballd</h1>
          <h2 class="font-light text-lg">
            An innovative fashion marketplace. A brand new social media.
          </h2>
          <div class="mt-6 py-5 px-2 border-b border-gray-300">
            <div class="flex">
              <div class="flex w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-400 pb-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  class="focus:outline-none pl-4 w-full"
                  placeholder="Search for your next wardrobe addition"
                />
              </div>
              <div class="flex items-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-full">
          <Model />
        </div>
      </div>
    </div>
    <section>
  <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="https://d2qzw5x58y77kz.cloudfront.net/web/assets/narrative/homepage-narrative-seller@2x.jpg"
            alt="Indoors house"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-5xl font-bold sm:text-3xl">
            What is Lowballd?
          </h2>

          <p class="mt-4 text-gray-600 text-lg">
            Lowballd is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like.
          </p>

          <a
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href="https://dev-5t61kzw2.us.auth0.com/u/login/identifier?state=hKFo2SBVX1pjbHlIUUJwb2VkWS1PU091aHBxWFhmS24yT0o2RqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDBfaXRERlF1dmxuTkJDNEU3LXAtYnVQdG5aRVhxXy1Io2NpZNkgWnhwbVBQbU1XaW16WDJsSXA1Tm1vVE5remIwUTNUVE4"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
    >
      <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
        <h2 class="text-3xl font-bold sm:text-4xl">Find your style</h2>

        <p class="mt-4 text-gray-600 text-lg">
          Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Depop.
        </p>

        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/marketplace"
        >
          <span class="text-sm font-medium"> Browse more </span>

          <svg
            class="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/3oRUvnntTxFd1pYQy4DA5E/4a8c47c29af2911bde70e45aae6735c6/ShopByStyle-LuxuryLVPuffer.jpg?fm=webp&h=245&w=390"
            />

          </span>

          <h6 class="mt-2 font-bold ">Luxury</h6>
          

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/hHu9wROVc4oPwjH5oBBzh/49023c5409f1c667eca2c93553865601/ShopByStyle_Streetwear2.jpg?fm=webp&h=245&w=390"
            />

          </span>

          <h6 class="mt-2 font-bold">Streetwear</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/2I3OaWW2bWHgka7uk0px2m/fbf148955eefc10e5b7e66d106016375/ShopByStyle_Web-AvantGarde.jpg?fm=webp&h=245&w=390"
            />
          </span>

          <h6 class="mt-2 font-bold">Avant Grade</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/7ICpfHe5ShaBXBruw5JydC/64c54eca4b895d9aba3ca6aad1465d1e/ShopByStyle_Web-Vintage4.jpg?fm=webp&h=245&w=390"
            />
          </span>

          <h6 class="mt-2 font-bold">Vintage</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/vWBsGV7ZIMFsxKgJq6VL4/7767e0a2dcd4dff3fd77e46297121e3c/ShopByStyle_Web-Tech3.jpg?fm=webp&h=245&w=390"
            />
          </span>

          <h6 class="mt-2 font-bold">Techwear</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/1itLXxA6Ajm41pG1sU7HuN/7f295c2f005a71791794b4f19a18d384/ShopByStyle_Web-Minimal-2.jpg?fm=webp&h=245&w=390"
            />
          </span>

          <h6 class="mt-2 font-bold">Minimalist</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
  </div>
  <Footer />
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import Footer from "../components/footer/Footer.vue";

export default {
  name: "Home",
  components: {
    GlobalNavbar, Footer
  },
};
</script>
