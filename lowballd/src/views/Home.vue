<template>
<GlobalNavbar/>
<token></token>
<section>
  <div class="contrast-[80%] w-full h-96 bg-fixed bg-center bg-cover bg-center flex justify-center items-center pt-[25%] pb-[25%]" style="background-image:url(https://i.pinimg.com/originals/c7/e5/fc/c7e5fcae592e9a3dba1f328ccfed9456.jpg)">
    <div class="h-screen w-screen flex flex-col justify-center">
      <div class="flex flex-row justify-around -mt-12 h-96">
        <div class="h-2/3 w-1/3 text-left ">
            <p class="font-extrabold text-left text-2xl mb-1 text-white">— NOW PRESENTING</p>
            <h1 class="font-extrabold text-8xl text-white mb-4 text-center">Lowballd</h1>
            <h2 class="font-extrabold  text-white text-center text-2xl">
              An innovative fashion marketplace. A brand new social media.
            </h2>    
        </div>
        <div class="w-1/2 h-full"></div>
      </div>
    </div>
  </div>
</section>
<section> 
  <div class=" py-16 mx-auto px-8">
    <div class="grid grid-cols-2 h-screen">
      <div class="relative z-10 py-16">
        <div class="relative h-full  ease-in duration-[180ms]" v-motion-slide-visible-left>
          <iframe
          id="ytplayer"
          class="absolute inset-0  pt-[10%] pb-[10%] w-full h-full"
            src="https://www.youtube.com/embed/dTe0S2nzB3I"
            alt="Indoors house">
          </iframe> 
        </div>
      </div>

      <div class="relative flex items-center ease-in duration-[180ms]" v-motion-slide-visible-right>
        <div class="p-8 ">
          <h2 class=" font-bold text-3xl">
            What is Lowballd?
          </h2>
          <p class="mt-4 text-gray-600 text-lg">
            Lowballd is the fashion marketplace app where the next generation come to discover unique items. With a global community buying, selling and connecting to make fashion more inclusive, diverse and less wasteful. This is what transforming fashion looks like.
          </p>
          <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          @click="login()"
        >
          <span class="text-sm font-medium"> Contact us </span>
        </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="mb-20 py-16 px-8">
    <div
      class="grid grid-cols-2 gap-y-8 gap-x-16 items-center">
      <div class= " mx-auto text-center ease-in duration-[180ms]" v-motion-slide-visible-left>
        <h2 class="text-3xl font-bold ">Find your style</h2>
        <p class="mt-4 text-gray-600 text-lg">
          Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Lowballd.
        </p>
        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/marketplace"
        >
          <span class="text-sm font-medium"> Browse more </span>
        </a>
      </div>
      
      <div class=" ease-in duration-[180ms]"        v-motion-slide-visible-right>   
        <section>
          <div class="content">
            <div class="carrousel">
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/3oRUvnntTxFd1pYQy4DA5E/4a8c47c29af2911bde70e45aae6735c6/ShopByStyle-LuxuryLVPuffer.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/hHu9wROVc4oPwjH5oBBzh/49023c5409f1c667eca2c93553865601/ShopByStyle_Streetwear2.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/2I3OaWW2bWHgka7uk0px2m/fbf148955eefc10e5b7e66d106016375/ShopByStyle_Web-AvantGarde.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/7ICpfHe5ShaBXBruw5JydC/64c54eca4b895d9aba3ca6aad1465d1e/ShopByStyle_Web-Vintage4.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/vWBsGV7ZIMFsxKgJq6VL4/7767e0a2dcd4dff3fd77e46297121e3c/ShopByStyle_Web-Tech3.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/1itLXxA6Ajm41pG1sU7HuN/7f295c2f005a71791794b4f19a18d384/ShopByStyle_Web-Minimal-2.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/vWBsGV7ZIMFsxKgJq6VL4/73f89a357d1de4f379d7cf7bcdb9cbee/Style_5.png?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/LBz479rx3wuqhRNA98TFf/3dd1e89db00c87079df8eb9a8fa43a10/Streetwear.jpg?fm=webp&h=245&w=390"></figure>
              <figure class= "shadow"> <img src="https://images.ctfassets.net/bdvz0u6oqffk/7ICpfHe5ShaBXBruw5JydC/0a7cfd535f322ea919dd90e5e32041e5/Style_4.png?fm=webp&h=245&w=390"></figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>        
<section>
  <div class=" py-16 mx-auto px-8 mb-20">
    <div class="grid grid-cols-2 h-screen">
      <div class="relative z-10 py-16">
        <div class="relative h-full ease-in duration-[180ms]" v-motion-slide-visible-left>
          <img
            class="absolute inset-0 object-cover w-full h-full "
            src="https://d2qzw5x58y77kz.cloudfront.net/web/assets/seller/sell-easily.jpg"
            alt="Indoors house"
          />
        </div>
      </div>

      <div class="relative flex items-center ease-in duration-[180ms]" v-motion-slide-visible-right>
        
        <div class="p-8">
          <h2 class=" font-bold text-3xl">
            Sell your clothes
          </h2>
          <p class="mt-4 text-gray-600 text-lg">
            Want to sell used clothes? Try Lowballd. List your clothes fast and sell with no fees. No space left in your closet? List it in our marketplace to declutter your closet space. Simply don't enjoy one of your fashion pieces anymore? Like that saying - one man's trash can be another man's treasure. 
          </p>
          <a
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href="/sell">
            Start selling
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="grid grid-cols-1 gap-y-8 gap-x-16 items-center ease-in duration-[200ms]" v-motion-fade-visible>
    <div class= "p-8 mx-auto text-center ease-in duration-    [200ms]" v-motion-fade-visible>
      <h2 class="text-3xl font-bold ">Share your outfit</h2>
        <p class="mt-4 text-gray-600 text-lg text-center pl-[20%] pr-[20%] whitespace-normal">
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
<section class="mb-64">
  <div class=" pl-[20rem] pr-[40rem] pt-[15rem] ">
      <div class=" text-center ease-in duration-[180ms] h-[20rem]" v-motion-slide-visible-left>
        <h2 class="text-3xl font-bold sm:text-4xl mt-[10%]">Reach out</h2>

        <p class="mt-4 text-gray-600 text-lg">
          The world is constantly evolving and so is Lowballd. We are always open for suggestions and ideas from our community. Most questions can be answered on our FAQ page but contact us if you cannot find a resolution there.
        </p>

        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/marketplace"
        >
          <span class="text-sm font-medium"> Contact us </span>
        </a>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 ease-in duration-[500ms]" v-motion-slide-visible-left>
    
      <div class="relative w-full max-w-lg">
        <div class="bg-center bg-cover absolute -top-10 -left-[-240%] w-52 h-52 animate-blob" style="background-image:url(https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvc2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80)"></div>
        <div class=" bg-center bg-cover absolute -bottom-52 -left-[-10%] w-72 h-72 animate-blob animation-delay-2000" v-motion-slide-visible-once-right style="background-image:url(https://assets.vogue.com/photos/600af64645612e3c356a87c1/master/w_2560%2Cc_limit/noah%2520x%2520louis%2520v%25201.21-3.jpg)"></div>
        <div class="bg-center bg-cover absolute top-0 -right-[24%] w-52 h-52 animate-blob animation-delay-4000" style="background-image:url(https://i.pinimg.com/736x/69/05/38/690538007051e5525f565017d86ef240.jpg)"></div>
        <div class="bg-center bg-cover absolute bottom-32 -left-[-10%] w-52 h-72 animate-blob animation-delay-6000" v-motion-slide-visible-once-left style="background-image:url(https://fashionista.com/.image/t_share/MTY2ODQ5MDkyMzM5NjM5MzE1/best-new-york-fashion-week-street-style-spring-2020.jpg)"></div>
        <div class="bg-center bg-cover absolute bottom-[93%] left-[180%] w-52 h-52 animate-blob animation-delay-8000" v-motion-slide-visible-once-left style="background-image:url(https://cdn.decorpad.com/photos/2020/06/01/m_modular-closet-system.jpg)"></div>
        <div class="bg-center bg-cover absolute bottom-32 left-[230%] w-72 h-72 animate-blob animation-delay-10000" v-motion-slide-visible-once-right style="background-image:url(https://i.pinimg.com/564x/0e/1b/74/0e1b740f3d8bd502d259e578b2eabe5a.jpg)"></div>
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
};
</script>

<style scoped>
.content{
  left: 35%;
  width:200px;
  perspective: 1000px;
  position: relative;
  padding-bottom: 35%;
  
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



