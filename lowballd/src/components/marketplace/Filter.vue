<template>
  <div class="w-60 h-full bg-gray-100 rounded-xl capitalize">
    <div class="flex flex-col">
      <p>hello</p>
      <div class="collapse collapse-arrow rounded-xl">
        <input type="checkbox" />
        <div class="collapse-title">
          <h1>hi</h1>
        </div>

        <div class="collapse-content">
          <button
            class="hover:bg-gray-400 flex justify-center items-center btn-ghost btn-sm cursor-pointer rounded-btn bg-white my-2 capitalize"
          >
            helllo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Filter",
};
</script>
