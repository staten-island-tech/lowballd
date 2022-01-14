<template>
  <div id="app" class="bg-gray-200 min-h-screen">
    <h2 class="ml-6 pt-3 text-lg font-semibold">Colors</h2>
    <div class="flex flex-wrap p-4">
      <base-button v-for="colors in colors" :color="colors" :key="colors" class="mx-2 mb-2">
        <span class="capitalize">{{colors}}</span>
      </base-button>
    </div>

    <h2 class="ml-6 mt-3 text-lg font-semibold">Outline</h2>
    <div class="flex flex-wrap p-4">
      <base-button v-for="colors in colors" outline :color="colors" :key="colors" class="mx-2 mb-2">
        <span class="capitalize">{{colors}}</span>
      </base-button>
    </div>

    <h2 class="ml-6 mt-3 text-lg font-semibold">Sizes</h2>
    <div class="flex items-end p-4">
      <div v-for="size in sizes" :key="size">
        <base-button :size="size" class="mx-2 mb-2">
          <span class="capitalize">{{size}}</span>
        </base-button>
      </div>
    </div>
    <h2 class="ml-6 mt-3 text-lg font-semibold">Icons</h2>
    <div class="flex flex-wrap items-end p-4">
      <base-button class="mx-2 mb-2">
        <i class="far fa-edit mr-1"/>
        <span>Edit</span>
      </base-button>
      <base-button class="mx-2 mb-2" icon>
        <i class="far fa-edit"/>
      </base-button>
      <base-button class="mx-2 mb-2" icon outline color="red" size="sm">
        <i class="far fa-trash-alt"/>
      </base-button>
      <base-button class="mx-2 mb-2" icon outline color="red">
        <i class="far fa-trash-alt"/>
      </base-button>
      <base-button class="mx-2 mb-2" icon outline color="red" size="lg">
        <i class="far fa-trash-alt"/>
      </base-button>
      <base-button class="mx-2 mb-2" size="sm" icon round outline color="green">
        <i class="fas fa-plus"/>
      </base-button>
      <base-button class="mx-2 mb-2" icon round outline color="green">
        <i class="fas fa-plus"/>
      </base-button>
      <base-button class="mx-2 mb-2" size="lg" icon round outline color="green">
        <i class="fas fa-plus"/>
      </base-button>
    </div>
  </div>
</template>

<script>
import Message from "../components/chat/Message.vue";

export default {
  name: "Chat",
  components: {
    Message
  },
  data() {
    return {
      colors: [
        "gray",
        "yellow",
        "orange",
        "red",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink"
      ],
      sizes: ["lg", "md", "sm"]
    };
  }
};
</script>
