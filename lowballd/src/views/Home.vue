<template>
<GlobalNavbar/>
<token></token>
<div class=overflow-hidden>
<section class="bg-gray-50 sm:px-0">
  <div
    class="mx-auto -mt-20 max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-xl text-center">
      <h1 class="xl:text-8xl md:text-8xl sm:text-4xl font-extrabold">
        welcome to
        <strong class="font-extrabold text-emerald-700 sm:block sm:text-6xl">
          lowballd.
        </strong>
      </h1>

      <p class="mt-4 xl:text-3xl md:text-3xl sm:text-md sm:leading-relaxed">
        An innovative fashion marketplace. A brand new social media.
      </p>

      <div class="mt-8 px-8 flex flex-wrap justify-center gap-4">
        <router-link to="/feed" class="block w-full rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring active:bg-emerald-500 sm:w-auto">
          See Outfits of the Day
        </router-link>
        <router-link to="/marketplace" 
          class="block w-full rounded px-12 py-3 text-sm font-medium text-emerald-600 shadow hover:text-emerald-700 focus:outline-none focus:ring active:text-emerald-500 sm:w-auto"
        >
          Browse Marketplace
        </router-link>
      </div>
    </div>
  </div>
</section>

<section class="h-[35vh] sm:h-[60vh] sm:mx-10 flex items-center">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" v-motion-slide-visible-once-right>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <iframe
          id="ytplayer"
          class="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dTe0S2nzB3I"
            alt="Indoors house">
          </iframe> 
      </div>

      <div class="lg:py-24" v-motion-slide-visible-once-left>
        <h2 class="text-3xl font-bold sm:text-4xl">What is Lowballd?</h2>

        <p class="mt-4 text-gray-600">
          Lowballd is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like.
        </p>

      </div>
    </div>
  </div>
</section>

<section class="flex items-center sm:mx-10 sm:mb-40 ">
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-[50vh] sm:h-[60vh] lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-30 sm:h-80 lg:h-full">
          <img
            alt="House"
            src="https://miro.medium.com/max/1400/1*knF6yjdINXoGYazgK1cASQ.jpeg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            List your clothes for sale within minutes.
          </h2>

          <p class="mt-4 text-gray-600">
            Got some clothes that you've outgrown? Need to declutter your closet? Or maybe you just simply don't enjoy one of your pieces as much anymore? List your clothes for sale quickly and seamlessly on our platform.
          </p>

          <a
            href="#"
            class="mt-8 inline-block rounded border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500"
          >
            Visit the Marketplace
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="h-[35vh] sm:h-[60vh] sm:mx-10 flex items-center">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">

        <div
          class="h-40 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-[url('https://images.ctfassets.net/bdvz0u6oqffk/3oRUvnntTxFd1pYQy4DA5E/4a8c47c29af2911bde70e45aae6735c6/ShopByStyle-LuxuryLVPuffer.jpg?fm=webp&h=245&w=390')]"
        >
        </div>
        <div
          class="h-40 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-[url('https://images.ctfassets.net/bdvz0u6oqffk/hHu9wROVc4oPwjH5oBBzh/49023c5409f1c667eca2c93553865601/ShopByStyle_Streetwear2.jpg?fm=webp&h=245&w=390')]"
        >
        </div>
        <div
          class="h-40 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-[url('https://images.ctfassets.net/bdvz0u6oqffk/2I3OaWW2bWHgka7uk0px2m/fbf148955eefc10e5b7e66d106016375/ShopByStyle_Web-AvantGarde.jpg?fm=webp&h=245&w=390')]"
        >
        </div>
        <div
          class="h-40 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-[url('https://images.ctfassets.net/bdvz0u6oqffk/7ICpfHe5ShaBXBruw5JydC/0a7cfd535f322ea919dd90e5e32041e5/Style_4.png?fm=webp&h=245&w=390')]"
        >
        </div>
        <div
          class="h-40 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-[url('https://images.ctfassets.net/bdvz0u6oqffk/LBz479rx3wuqhRNA98TFf/3dd1e89db00c87079df8eb9a8fa43a10/Streetwear.jpg?fm=webp&h=245&w=390')]"
        >
        </div>
        <div
          class="h-40 block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-[url('https://images.ctfassets.net/bdvz0u6oqffk/vWBsGV7ZIMFsxKgJq6VL4/7767e0a2dcd4dff3fd77e46297121e3c/ShopByStyle_Web-Tech3.jpg?fm=webp&h=245&w=390')]"
        >
        </div>
        
      </div>
      </div>

      <div class="lg:py-24 text-left">
        <h2 class="text-3xl font-bold sm:text-4xl">Find your style.</h2>

        <p class="mt-4 text-gray-600">
          Struggling to find inspiration for outfit ideas? Lowballd is the perfect solution for you. Browse the Feed for your daily dose of fresh 'fits, and shop around in the Marketplace for quality pieces of clothing that are looking for a new home in your wardrobe.
        </p>

      </div>
    </div>
  </div>
</section>

<section>
  <div class="grid grid-cols-1 gap-y-8 gap-x-16 items-center ease-in duration-[180ms]" v-motion-fade-visible-once>
    <div class= "p-8 mx-auto text-center ease-in duration-    [180ms]" v-motion-fade-visible>
      <h2 class="text-3xl font-bold ">Share your outfit</h2>
        <p class="mt-4 text-gray-600 text-md text-center pl-[20%] pr-[20%] whitespace-normal">
            The clothes a person wears tells us many things: their status in life, for example, or their cultural affiliation or identity. They can tell us what era they live in, and even a person’s current state of mind or intent. Potraying your clothing will help you create fuller, richer character portraits. Share your outfits so everyone can better understand who you are.
        </p>
        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/shareoutift"
        >
          <span class="text-sm font-medium"> Start posting </span>
        </a>
      </div>
    </div>
  <div class="flex flex-row h-[40rem] mx-auto overflow-hidden ease-in duration-[100ms] mb-10">
    <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7  "
      style="background-image:url(https://preview.redd.it/fehgbh015ig81.jpg?auto=webp&s=fdaaf46f0d7b926b5bf7579494bea482b35b468d)"></div>
    <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/25/08/ts-lindseybyrnes-sim-2885-e.jpg?width=1200)"></div>
    <div class="flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/26/16/istock-1005864440.jpg?width=1200)"></div>
    <div class=" flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://www.vmcdn.ca/f/files/rwcpulse/images/redwoodcitypulse/stories/katsy_skatebaording_02_web-1536x1024.jpg;w=1200;h=800;mode=crop)"></div>
    <div class=" flex-1 h-full w-full bg-cover bg-center transition-all flex ease-in duration-500 ease-out duration-500 hover:flex-7 ease-linear"
      style="background-image:url(https://sm.mashable.com/mashable_sea/article/d/dont-flip-/dont-flip-olivia-rodrigos-collab-with-casetify-is-a-90s-tech_dngf.jpg)"></div>
  </div> 
</section>

<Footer/>
</div>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import Footer from "../components/footer/Footer.vue";
export default {
  name: "Home",
  components: {
    GlobalNavbar, Footer,
  },
  // Log the user in
methods: {
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
 * {
	 box-sizing: border-box;
}
 video {
	 position: absolute;
	 top: 5 rem;
	 left: 0;
	 width: 100%;
	 object-fit: cover;
	 object-position: center;
}
 div#fashion {
	 min-height: 100vh;
	 display: flex;
	 align-items: center;
	 justify-content: center;
}
.slider{
	width: 640px;
	position: relative;
  left: 120%;
  top: 2rem;
}
.slider>img{
	position: absolute;
	left: 0; bottom: 130%; 
	transition: all 0.5s;
}
.slider input[name='slide_switch'] {
	display: none;
}
.slider label {
	margin: 15px 0 0 18px;
	border: 3px solid #999;
	float: left;
	cursor: pointer;
	transition: all 0.5s;
	opacity: 0.6;
}
.slider label img{
	display: block;
}
.slider input[name='slide_switch']:checked+label {
	border-color: #666;
	opacity: 1;
}
.slider input[name='slide_switch'] ~ img {
	opacity: 0;
	transform: scale(1.1);
}
.slider input[name='slide_switch']:checked+label+img {
	opacity: 1;
	transform: scale(1);
}
.content{
  left: 35%;
  width:200px;
  perspective: 1000px;
  position: relative;
  padding-bottom: 30%;
} 
.carrousel{
  width:100%;
  position: absolute;
  height: ;
  animation: rotate 15s infinite linear;
  transform-style: preserve-3d;
}
.carrousel:hover{
  animation-play-state: paused;
  cursor: pointer;
  
}
.carrousel figure{
  width:90%;
  height:200px;
  position: absolute;
}
.carrousel img{
  image-rendering: auto;
  transition: all 300ms;
  width: 100%;
  height: 100%
  
}
.carrousel img:hover{
  transform: scale(1.1) ;
  transition:all 1000ms;
}
  @keyframes rotate{
    0% {
      transform: rotateY(0deg) ;
   }
   100% {
      transform: rotateY(360deg);
   }
  } 
.carrousel figure:nth-child(1) { transform:rotateY(0deg) translateZ(300px); }
.carrousel figure:nth-child(2) { transform:rotateY(40deg) translateZ(300px); }
.carrousel figure:nth-child(3) { transform:rotateY(80deg) translateZ(300px); }
.carrousel figure:nth-child(4) { transform:rotateY(120deg) translateZ(300px); }
.carrousel figure:nth-child(5) { transform:rotateY(160deg) translateZ(300px); }
.carrousel figure:nth-child(6) { transform:rotateY(200deg) translateZ(300px); }
.carrousel figure:nth-child(7) { transform:rotateY(240deg) translateZ(300px); }
.carrousel figure:nth-child(8) { transform:rotateY(280deg) translateZ(300px); }
.carrousel figure:nth-child(9) { transform:rotateY(320deg) translateZ(300px); }
  
  
</style>




