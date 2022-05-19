<!--
  This component uses @tailwindcss/forms and @tailwindcss/aspect-ratio

  yarn add @tailwindcss/forms @tailwindcss/aspect-ratio
  npm install @tailwindcss/forms @tailwindcss/aspect-ratio

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
-->

<style>
  .no-spinners {
    -moz-appearance: textfield;
  }

  .no-spinners::-webkit-outer-spin-button,
  .no-spinners::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
</style>


<template>
<section>
  <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
    <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
        <div class="aspect-w-1 aspect-h-1">
          <img
            alt="Mobile Phone Stand"
            class="object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
          />
        </div>

        <div class="grid grid-cols-2 gap-4 lg:mt-4">
          <div class="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
            />
          </div>

          <div class="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
            />
          </div>

          <div class="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
            />
          </div>

          <div class="aspect-w-1 aspect-h-1">
            <img
              alt="Mobile Phone Stand"
              class="object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1627844541143-a561a1a9b72a"
            />
          </div>
        </div>
      </div>

      <div class="sticky top-0">
        <div class="flex flex-row">
    <div class="avatar pt-4">
        <div class="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGBvBlLy-uljw/profile-displayphoto-shrink_200_200/0/1610509335728?e=1648684800&v=beta&t=u9GCzx6GctOLBqOeRB1Z9Jv7aBXeb8XZrHCyvFBA-qw">
        </div>
    </div> 
    <div class="p-4">
        <h1>Alston Chan</h1>
        <p class="text-slate-500 text-sm">Staten Island, NY</p>
        <div class="rating">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" checked="checked" class="mask mask-star-2 bg-warning"> 
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-warning">
            <p class="pl-2 pt-[3px]">(483)</p>
        </div>
        <!--<a href="#" class="text-blue-600 visited:text-purple-600">Message Seller</a>-->
    </div>
</div>

        <div class="flex justify-between mt-8">
          <div class="max-w-[35ch]">
            <h1 class="text-2xl font-bold">
              Fun Product That Does Something Cool
            </h1>

            <p class="mt-0.5 text-sm">
              Highest Rated Product
            </p>

            <div class="flex mt-2 -ml-0.5">
              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <p class="text-lg font-bold">
            $119.99
          </p>
        </div>

        <details class="relative mt-4 group">
          <summary class="block">
            <div>
              <div class="prose max-w-none group-open:hidden">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
                </p>
              </div>

              <span class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                Read More
              </span>
            </div>
          </summary>

          <div class="pb-6 prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam sapiente nobis ea veritatis error consequatur nisi exercitationem iure laudantium culpa, animi temporibus non! Maxime et quisquam amet. A, deserunt!
            </p>
            <div class="flex flex-col w-full pt-12">
    <div class="flex justify-between">
        <div class="grid font-bold">Size</div> 
        <h1 class="text-slate-700 text-right">Small</h1>
    </div>
        <div class="divider"></div> 
    <div class="flex justify-between">
        <div class="grid font-bold">Brand</div>
        <h1 class="text-slate-700 text-right">Nike</h1>
    </div>
        <div class="divider"></div> 
    <div class="flex justify-between">
        <div class="grid font-bold">Condition</div>
        <h1 class="text-slate-700 text-right">Brand New</h1>
    </div>
        <div class="divider"></div>
    <div class="flex justify-between"> 
        <div class="grid font-bold">Style</div>
        <h1 class="text-slate-700 text-right">High Top Jordan Air</h1>
    </div>
        <div class="divider"></div>
    <div class="flex justify-between"> 
        <div class="grid font-bold">Color</div>
        <h1 class="text-slate-700 text-right">Red-Black</h1>
    </div>
        <div class="divider"></div> 
    <div class="flex justify-between">
        <div class="grid font-bold">Shipping</div>
        <h1 class="text-slate-700 text-right">Free</h1>
    </div>
        <div class="divider"></div>
  
</div>
          </div>
        </details>

        <form class="mt-8">
          <fieldset>
            <legend class="mb-1 text-sm font-medium">Tag</legend>

            <div class="flow-root">
              <div class="flex flex-wrap -m-0.5">
                <label for="color_tt" class="cursor-pointer p-0.5">
                  <input type="radio" name="color" id="color_tt" class="sr-only peer" />

                  <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    tag
                    
                  </span>
                </label>

              </div>
            </div>
          </fieldset>

          <fieldset class="mt-4">
            <legend class="mb-1 text-sm font-medium">Size</legend>

            <div class="flow-root">
              <div class="flex flex-wrap -m-0.5">
                <label for="size_xs" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_xs" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    XS
                  </span>
                </label>

                <label for="size_s" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_s" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    S
                  </span>
                </label>

                <label for="size_m" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_m" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    M
                  </span>
                </label>

                <label for="size_l" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_l" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    L
                  </span>
                </label>

                <label for="size_xl" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_xl" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    XL
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          <div class="flex mt-8">
            <div>
              <label for="quantity" class="sr-only">Qty</label>

              <input
                type="number"
                id="quantity"
                min="1"
                value="1"
                class="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
              />
            </div>

            <button
              type="submit"
              class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-blue-600 rounded hover:bg-pink-500"
            >
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  import { mapActions } from 'vuex';
  import { useStore } from 'vuex';

  
  export default {
    name:'productTest',
    // created() {
    //   this.fetchById();
    // },
    method: {
      ...mapActions(['fetchById']),
      
    }

    // data: () => {
    //   return {
    //       Main: {
    //           title: "",
    //           price: "",
    //           imgUrl: "",
    //       },
          
    //   }
    // },
    // created: function () {
    //   console.log(this.Main)
    // }
  }

</script>
