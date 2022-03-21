<template>
  <div>
    <GlobalNavbar />
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
            src="https://www.hyperui.dev/photos/house-1.jpeg"
            alt="Indoors house"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>

          <p class="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>

          <a
            class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href="/contact"
          >
            Get in Touch
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
        <h2 class="text-3xl font-bold sm:text-4xl">Find your career path</h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="/get-started"
        >
          <span class="text-sm font-medium"> Get Started </span>

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
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h6 class="mt-2 font-bold">Accountant</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h6 class="mt-2 font-bold">Accountant</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h6 class="mt-2 font-bold">Accountant</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h6 class="mt-2 font-bold">Accountant</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h6 class="mt-2 font-bold">Accountant</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
          href="/accountant"
        >
          <span class="inline-block p-3 rounded-lg bg-gray-50">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h6 class="mt-2 font-bold">Accountant</h6>

          <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>
import GlobalNavbar from "../components/GlobalNavbar.vue";

export default {
  name: "Home",
  components: {
    GlobalNavbar,
  },
};
</script>
