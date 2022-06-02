<template>
  <GlobalNavbar/>
  <token></token>
  
    <div class="w-full h-96 bg-fixed bg-center bg-cover bg-center flex justify-center items-center pt-[25%] pb-[25%]"
        style="background-image:url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elfa-closet-1570213713.jpg)">
        <div class="h-screen w-screen flex flex-col justify-center">
      <div class="flex flex-row justify-around -mt-12 h-96">
        <div class="h-2/3 w-1/3 text-left">
          <p class="font-normal text-center text-2xl mb-1 text-gray-100">— NOW PRESENTING</p>
          <h1 class="font-bold text-8xl text-gray-100 mb-4 text-center">Lowballd</h1>
          <h2 class="font-normal text-gray-100 text-center text-2xl text-lg">
            An innovative fashion marketplace. A brand new social media.
          </h2>
          
        </div>
        <div class="w-1/2 h-full">
          
        </div>
      </div>
    </div>
  </div>
    <section>
  
  <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full  ease-in duration-[180ms]" v-motion-slide-visible-once-left>
          <img
            class="absolute inset-0 object-cover w-full h-full"
            src="https://d2qzw5x58y77kz.cloudfront.net/web/assets/narrative/homepage-narrative-seller@2x.jpg"
            alt="Indoors house"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100  ease-in duration-[180ms]" v-motion-slide-visible-once-right>
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
      <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0 ease-in duration-[180ms]" v-motion-slide-visible-once-left>
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

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 ease-in duration-[180ms]" v-motion-slide-visible-once-right>
        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/3oRUvnntTxFd1pYQy4DA5E/4a8c47c29af2911bde70e45aae6735c6/ShopByStyle-LuxuryLVPuffer.jpg?fm=webp&h=245&w=390"
            />

          </span>

          <h6 class="mt-2 font-bold text-center">Luxury</h6>
          

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-100 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/hHu9wROVc4oPwjH5oBBzh/49023c5409f1c667eca2c93553865601/ShopByStyle_Streetwear2.jpg?fm=webp&h=245&w=390"
            />

          </span>

          <h6 class="mt-2 font-bold text-center">Streetwear</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-100 hover:ring-1 hover:ring-gray-200 hover:scale-[110%]"
          
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <img class="w-40 h-35"
            src="https://images.ctfassets.net/bdvz0u6oqffk/2I3OaWW2bWHgka7uk0px2m/fbf148955eefc10e5b7e66d106016375/ShopByStyle_Web-AvantGarde.jpg?fm=webp&h=245&w=390"
            />
          </span>

          <h6 class="mt-2 font-bold text-center">Avant Grade</h6>

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

          <h6 class="mt-2 font-bold text-center">Vintage</h6>

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

          <h6 class="mt-2 font-bold text-center">Techwear</h6>

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

          <h6 class="mt-2 font-bold text-center">Minimalist</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 mb-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full ease-in duration-[180ms]" v-motion-slide-visible-once-left>
          <img
            class="absolute inset-0 object-cover w-full h-full "
            src="https://d2qzw5x58y77kz.cloudfront.net/web/assets/seller/sell-easily.jpg"
            alt="Indoors house"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100 ease-in duration-[180ms]" v-motion-slide-visible-once-right>
        <span
          class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16 "
        ></span>
        <div class="p-8 sm:p-16 lg:p-24 ">
          <h2 class="text-5xl font-bold sm:text-3xl">
            Sell your clothes
          </h2>

          <p class="mt-4 text-gray-600 text-lg">
            Lowballd is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like.
          </p>

          <a
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href="/sell"
          >
            Start selling
          </a>
        </div>
      </div>
    </div>
  </div>

</section>
  <section>
    <div class=" relative flex items-center bg-gray-100 ease-in duration-[150ms]"  v-motion-slide-visible-once-bottom >
        <span
          class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16 "
        ></span>
        <div class="p-8 sm:p-16 lg:p-24 ">
          <h2 class="text-5xl font-bold sm:text-3xl text-center">
            Share your outfits
          </h2>

          <p class="mt-4 text-gray-600 text-lg text-center pl-[20%] pr-[20%] mb-[2%]">
            Lowballd is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like.
          </p>

          <a
            class="ml-[44%] px-12 py-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href="/shareoutfit"
          >
            Share your outfit
          </a>
        </div>
      </div>
    
    
      <div class="flex flex-row h-[40rem] mx-auto overflow-hidden ease-in duration-[100ms] mb-10">
        <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-1000 ease-out duration-1000 hover:flex-7  "
        style="background-image:url(https://gracefulstory.com/wp-content/uploads/2016/09/street-style-1200x700.jpg)"></div>
        <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-1000 ease-out duration-1000 hover:flex-7 ease-linear"
        style="background-image:url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/25/08/ts-lindseybyrnes-sim-2885-e.jpg?width=1200)"></div>
        <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-1000 ease-out duration-1000 hover:flex-7 ease-linear"
        style="background-image:url(https://images.ctfassets.net/sc7uy4u0eewy/2E06B9vay4Y4SgYsuu8yso/a5aee5fb4cbe2e73a5b2deab3fcd0e7f/_DSC4524.jpg)"></div>
        <div class=" flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-1000 ease-out duration-1000 hover:flex-7 ease-linear"
        style="background-image:url(https://www.apetogentleman.com/wp-content/uploads/2019/05/casual-dressing-tips1.jpg)"></div>
        <div class=" flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-1000 ease-out duration-1000 hover:flex-7 ease-linear"
        style="background-image:url(https://fashionista.com/.image/t_share/MTY2ODQ5MDkyMzM5NjM5MzE1/best-new-york-fashion-week-street-style-spring-2020.jpg)"></div>
        
      
      </div>
      </section>
  <section class=" mb-72">
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
    >
    </div>
      <div class="max-w-lg mx-auto text-center mt-[20%] lg:text-left lg:mx-0 ease-in duration-[180ms]" v-motion-slide-visible-once-left>
        <h2 class="text-3xl font-bold sm:text-4xl mt-[10%]">Reach out</h2>

        <p class="mt-4 text-gray-600 text-lg">
          Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Depop.
        </p>

        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/marketplace"
        >
          <span class="text-sm font-medium"> Contact us </span>

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
    </div>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 ease-in duration-[180ms]" v-motion-slide-visible-once-right>
    
      <div class="relative w-full max-w-lg">
        <div class="bg-center bg-cover absolute -top-10 -left-[-260%] w-52 h-52 animate-blob" v-motion-slide-visible-once-top style="background-image:url(https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvc2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80)"></div>
        <div class=" bg-center bg-cover absolute -bottom-52 -left-[-10%] w-72 h-72 animate-blob animation-delay-2000" v-motion-slide-visible-once-right style="background-image:url(https://assets.vogue.com/photos/600af64645612e3c356a87c1/master/w_2560%2Cc_limit/noah%2520x%2520louis%2520v%25201.21-3.jpg)"></div>
        <div class="bg-center bg-cover absolute top-0 -right-[24%] w-52 h-52 animate-blob animation-delay-4000" v-motion-slide-visible-once-right style="background-image:url(https://i.pinimg.com/736x/69/05/38/690538007051e5525f565017d86ef240.jpg)"></div>
        <div class="bg-center bg-cover absolute bottom-32 -left-[-10%] w-52 h-72 animate-blob animation-delay-6000" v-motion-slide-visible-once-left style="background-image:url(https://fashionista.com/.image/t_share/MTY2ODQ5MDkyMzM5NjM5MzE1/best-new-york-fashion-week-street-style-spring-2020.jpg)"></div>
        <div class="bg-center bg-cover absolute bottom-[93%] left-[200%] w-52 h-52 animate-blob animation-delay-8000" v-motion-slide-visible-once-left style="background-image:url(https://cdn.decorpad.com/photos/2020/06/01/m_modular-closet-system.jpg)"></div>
        <div class="bg-center bg-cover absolute bottom-32 left-[250%] w-72 h-72 animate-blob animation-delay-10000" v-motion-slide-visible-once-right style="background-image:url(https://i.pinimg.com/564x/0e/1b/74/0e1b740f3d8bd502d259e578b2eabe5a.jpg)"></div>
    
    </div>
  </div>

</section>

<Footer/>
</template>

<script>

import GlobalNavbar from "../components/GlobalNavbar.vue";
import Footer from "../components/footer/Footer.vue";

export default {
  name: "Home",
  components: {
    GlobalNavbar, Footer,
  },
};
</script>


